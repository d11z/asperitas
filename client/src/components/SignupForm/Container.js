import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { attemptSignup } from '../../actions/auth';
import SignupForm from './Component';

const mapStateToProps = state => ({ token: state.auth.token });
const mapDispatchToProps = { attemptSignup };

const SignupFormContainer = reduxForm({ form: 'signup' })(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignupForm)
);

export default SignupFormContainer;
