exports.load = async (req, res, next, id) => {
  try {
    req.comment = await req.post.comments.id(id);
    if (!req.comment) return next(new Error('Comment not found'));
  } catch (err) {
    return next(err);
  }
  next();
};

exports.create = async (req, res, next) => {
  try {
    const post = await req.post.addComment(req.user.id, req.body.body);
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const post = await req.post.removeComment(req.params.comment);
    res.json(post);
  } catch (err) {
    next(err);
  }
};
