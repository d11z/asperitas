import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { attemptSignup } from '../../actions/auth';
import { hideError } from '../../actions/error';
import validate from './validate';
import SignupForm from './Component';

const mapStateToProps = state => ({
  loading: state.auth.loading,
  token: state.auth.token,
  error: state.error
});

const mapDispatchToProps = { attemptSignup, hideError };

const SignupFormContainer = reduxForm({ form: 'signup', validate })(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignupForm)
);

export default SignupFormContainer;
