import { connect } from 'react-redux';

export default function withAuth (WrappedComponent) {
  const mapStateToProps = state => ({
    token: state.auth.token,
    user: state.auth.user
  });

  return connect(mapStateToProps)(WrappedComponent);
}
