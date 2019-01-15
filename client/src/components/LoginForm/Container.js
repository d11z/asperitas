import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { attemptLogin } from '../../actions/auth';
import LoginForm from './Component';

const mapStateToProps = state => ({
  loading: state.auth.loading,
  token: state.auth.token
});

const mapDispatchToProps = { attemptLogin };

const LoginFormContainer = reduxForm({ form: 'login' })(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginForm)
);

export default LoginFormContainer;
