const validate = values => {
  if (values.password !== values.password2) {
    return { password2: 'passwords must match' };
  }
};

export default validate;
