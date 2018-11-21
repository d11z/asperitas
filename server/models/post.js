const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, required: true },
  score: { type: Number, default: 0 },
  created: { type: Date, default: Date.now }
});

postSchema.set('toJSON', { getters: true });
postSchema.options.toJSON.transform = (doc, ret) => {
  const obj = { ...ret };
  delete obj._id;
  delete obj.__v;
  return obj;
};

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
