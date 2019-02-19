const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  title: { type: String, required: true, unique: true },
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
})

categorySchema.set('toJSON', { getters: true });
categorySchema.options.toJSON.transform = (doc, ret) => {
  const obj = { ...ret };
  delete obj._id;
  return obj;
};

categorySchema.pre(/^find/, function () {
  this.populate('owner');
});

categorySchema.post('save', function (doc, next) {
  doc
    .populate('owner')
    .execPopulate()
    .then(() => next());
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
