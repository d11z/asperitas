import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuth from '../../util/withAuth';
import { logout } from '../../actions/auth';
import Header from './Component';

const mapDispatchToProps = { logout };

const enhance = compose(
  withAuth,
  connect(null, mapDispatchToProps)
);

const HeaderContainer = enhance(Header);

export default HeaderContainer;
