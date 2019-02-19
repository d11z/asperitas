const { body, validationResult } = require('express-validator/check');
const Category = require('../models/category');
const User = require('../models/user');

exports.load = async (req, res, next, id) => {
  try {
    req.category = await Category.findOne({ title: id });
    if (!req.category) return res.status(404).json({ message: 'category not found' });
  } catch (err) {
    if (err.name === 'CastError')
      return res.status(400).json({ message: 'invalid category name' });
    return next(err);
  }
  next();
};

exports.show = async (req, res) => {
  const category = await Category.findOne({ title: req.category.id })
  res.json(category);
};

exports.list = async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
};

exports.listByOwner = async (req, res) => {
  const username = req.params.user;
  const owner = await User.findOne({ username })
  const categories = await Category.find({ owner: owner.id });
  res.json(categories);
};
