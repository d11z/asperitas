import React from 'react';
import Form from './shared/Form';
import Label from './shared/Label';
import Input from './shared/Input';
import SubmitButton from './shared/SubmitButton';

class SignupForm extends React.Component {
  redirect() {
    const { token, history } = this.props;
    if (token) history.push('/');
  }

  componentDidMount() {
    this.redirect();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.redirect();
  }

  onSubmit = ({ username, password }) => {
    this.props.attemptSignup(username, password);
  };

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Label htmlFor='username'>username</Label>
        <Input name='username' id='username' type='text' component='input' />
        <Label htmlFor='password'>password</Label>
        <Input name='password' id='password' type='password' component='input' />
        <Label htmlFor='password2'>confirm password</Label>
        <Input name='password2' id='password2' type='password' component='input' />
        <SubmitButton type='submit'>sign up</SubmitButton>
      </Form>
    );
  }
}

export default SignupForm;
