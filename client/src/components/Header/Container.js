import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import Header from './Component';

const mapStateToProps = state => ({ user: state.auth.user });
const mapDispatchToProps = { logout };

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
