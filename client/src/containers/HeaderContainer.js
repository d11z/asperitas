import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import Header from '../components/Header';

const mapStateToProps = state => ({ token: state.auth.token });
const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
