import React from 'react';
import Form from '../shared/form/Form';
import SubmitButton from '../shared/form/SubmitButton';
import { Field } from 'redux-form';
import renderField from '../shared/form/renderField';

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
        <Field
          name='username'
          label='username'
          type='text'
          component={renderField}
        />
        <Field
          name='password'
          label='password'
          type='password'
          component={renderField}
        />
        <SubmitButton type='submit'>log in</SubmitButton>
      </Form>
    );
  }
}

export default LoginForm;
