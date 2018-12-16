import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { attemptSignup } from '../actions/auth';
import SignupForm from '../components/SignupForm';

const mapStateToProps = state => ({ token: state.auth.token });
const mapDispatchToProps = { attemptSignup };

export default reduxForm({ form: 'signup' })(
  connect(mapStateToProps, mapDispatchToProps)(SignupForm)
);
