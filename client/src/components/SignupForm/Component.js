import React from 'react';
import { Field } from 'redux-form';
import Form from '../shared/form/Form';
import renderField from '../shared/form/renderField';
import SubmitButton from '../shared/form/SubmitButton';

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
        <Field
          name='password2'
          label='confirm password'
          type='password'
          component={renderField}
        />
        <SubmitButton type='submit'>sign up</SubmitButton>
      </Form>
    );
  }
}

export default SignupForm;
