const { body, validationResult } = require('express-validator/check');
const { login, createAuthToken } = require('../auth');
const User = require('../models/user');
const config = require('../config');
const sgMail=require('@sendgrid/mail');
const jwt=require('jsonwebtoken');
sgMail.setApiKey(config.sendgrid.apiKey);


exports.updatepassword=async(req,res,next)=>{
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const errors = result.array({ onlyFirstError: true });
    return res.status(422).json({ errors });
  }
  try{
    const {password,token}=req.body;
    const decode=await jwt.decode(token,config.jwt.secret);
    const user=await User.findOne({_id:decode._id});
    if(!user){
      throw new Error('user not found');
    }
    user.password=password;
    await user.save();
    res.status(200).send();
  }catch(err){
    next(err);
  }
}

exports.forgot=async(req,res,next)=>{
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const errors = result.array({ onlyFirstError: true });
    return res.status(422).json({ errors });
  }
  try{
    const {username}=req.body
    const user =await User.findOne({username:username});
    if(!user){
      throw new Error('username not found');
    }
    const token=await jwt.sign({_id:user._id},config.jwt.secret,{expiresIn:80});
    user.resettoken=token;
    await user.save();
    const msg={
      to: `${user.email}`,
      from: config.sendgrid.verifiedEmail, // Change it to your verified sender email of sendgrid
      subject: 'Password Reset',
      text: 'If you haven\'t tried to reset please contact us asap',
      html: `<a href='${config.sendgrid.address}/updatePassword/${token}'>Reset Password</a>`,
    }
    await sgMail.send(msg);
    res.status(200).send();
  }catch(err){
    next(err);
  }
}

exports.login = (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const errors = result.array({ onlyFirstError: true });
    return res.status(422).json({ errors });
  }
  login(req,res,next);
};

exports.register = async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const errors = result.array({ onlyFirstError: true });
    return res.status(422).json({ errors });
  }
  try {
    const { username, password, email } = req.body;
    const user = await User.create({ username, password,email});
    const token =await createAuthToken(user.toJSON());
    const msg = {
      to: `${user.email}`,
      from:config.sendgrid.verifiedEmail, // Change to your verified sender
      subject: 'Signup',
      text: 'A user has Signed Up using your email',
      html: `<h1>If you haven\'t signed up please contact immediately </h1>`,
    }
   const sent=await sgMail.send(msg);
   if(sent){
     console.log('email sent');
   }
    res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};

exports.validate = method => {
  const errors = [
    body('username')
      .exists()
      .withMessage('is required')

      .isLength({ min: 1 })
      .withMessage('cannot be blank')

      .isLength({ max: 32 })
      .withMessage('must be at most 32 characters long')

      .custom(value => value.trim() === value)
      .withMessage('cannot start or end with whitespace')

      .matches(/^[a-zA-Z0-9_-]+$/)
      .withMessage('contains invalid characters'),

    body('password')
      .exists()
      .withMessage('is required')

      .isLength({ min: 1 })
      .withMessage('cannot be blank')

      .isLength({ min: 8 })
      .withMessage('must be at least 8 characters long')

      .isLength({ max: 72 })
      .withMessage('must be at most 72 characters long')
  ];

  if (method === 'register') {
    errors.push(
      body('username').custom(async username => {
        const exists = await User.countDocuments({ username });
        if (exists) throw new Error('already exists');
      })
    );
  }

  return errors;
};
