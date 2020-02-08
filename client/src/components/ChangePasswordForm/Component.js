import React, { useEffect } from 'react';
import { Field } from 'redux-form';
import Form from '../shared/form/Form';
import renderField from '../shared/form/renderField';
import { passwordValidator } from '../../util/validators';
import SubmitButton from '../shared/form/SubmitButton';

const ChangePasswordForm = props => {
  useEffect(() => {
    if (!props.token) {
      props.history.push('/');
    }
  }, []);

  async function onSubmit({ oldPassword, newPassword }) {
    await props.attemptPasswordChange(oldPassword, newPassword);
  }

  return (
    <Form loading={props.loading} onSubmit={props.handleSubmit(onSubmit)}>
      <Field
        name='oldPassword'
        label='Old password'
        type='password'
        component={renderField}
        validate={passwordValidator}
      />
      <Field
        name='newPassword'
        label='New password'
        type='password'
        component={renderField}
        validate={passwordValidator}
      />
      <SubmitButton type='submit'>change password</SubmitButton>
    </Form>
  );
};

export default ChangePasswordForm;
