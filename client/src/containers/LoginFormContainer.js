import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { attemptLogin } from '../actions/auth';
import LoginForm from '../components/LoginForm';

const mapStateToProps = state => ({ token: state.auth.token });
const mapDispatchToProps = { attemptLogin };

export default reduxForm({ form: 'login' })(
  connect(mapStateToProps, mapDispatchToProps)(LoginForm)
);
