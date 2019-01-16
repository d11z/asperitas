import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { attemptLogin } from '../../actions/auth';
import { hideError } from '../../actions/error';
import LoginForm from './Component';

const mapStateToProps = state => ({
  loading: state.auth.loading,
  token: state.auth.token,
  error: state.error
});

const mapDispatchToProps = { attemptLogin, hideError };

const LoginFormContainer = reduxForm({ form: 'login' })(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginForm)
);

export default LoginFormContainer;
