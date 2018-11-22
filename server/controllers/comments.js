exports.create = async function (req, res, next) {
  try {
    const post = await req.post.addComment(req.body.author, req.body.body);
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

exports.destroy = async function (req, res, next) {
  try {
    const post = await req.post.removeComment(req.params.comment);
    res.json(post);
  } catch (err) {
    next(err);
  }
};
