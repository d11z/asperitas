import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import withAuth from '../../util/withAuth';
import { attemptPasswordChange } from '../../actions/auth';
import ChangePasswordForm from './Component';

const mapStateToProps = state => ({
  loading: state.auth.loading
});

const mapDispatchToProps = { attemptPasswordChange };

const enhance = compose(
  reduxForm({ form: 'changePassword' }),
  withAuth,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

const ChangePasswordContainer = enhance(ChangePasswordForm);

export default ChangePasswordContainer;
