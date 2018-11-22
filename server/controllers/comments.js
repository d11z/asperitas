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
