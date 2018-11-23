const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  body: { type: String, required: true },
  created: { type: Date, default: Date.now }
});

commentSchema.set('toJSON', { getters: true });
commentSchema.options.toJSON.transform = (doc, ret) => {
  const obj = { ...ret };
  delete obj._id;
  return obj;
};

const postSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  category: { type: String, required: true },
  score: { type: Number, default: 0 },
  comments: [commentSchema],
  created: { type: Date, default: Date.now }
});

postSchema.set('toJSON', { getters: true });
postSchema.options.toJSON.transform = (doc, ret) => {
  const obj = { ...ret };
  delete obj._id;
  delete obj.__v;
  return obj;
};

postSchema.methods.addComment = function (author, body) {
  this.comments.push({ author, body });
  return this.save();
};

postSchema.methods.removeComment = function (id) {
  const comment = this.comments.id(id);
  if (!comment) throw new Error('Comment not found');
  comment.remove();
  return this.save();
};

postSchema.pre('find', function() {
  this.populate('author').populate('comments.author');
});

postSchema.post('save', (doc, next) => {
  doc
    .populate('author')
    .populate('comments.author')
    .execPopulate()
    .then(() => next());
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
