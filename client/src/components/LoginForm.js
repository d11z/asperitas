import React from 'react';
import Form from './Form';
import Label from './Label';
import Input from './Input';
import SubmitButton from './SubmitButton';

class LoginForm extends React.Component {
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
    this.props.attemptLogin(username, password);
  };

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Label htmlFor='username'>username</Label>
        <Input name='username' id='username' type='text' component='input' />
        <Label htmlFor='password'>password</Label>
        <Input name='password' id='password' type='password' component='input' />
        <SubmitButton type='submit'>log in</SubmitButton>
      </Form>
    );
  }
}

export default LoginForm;
