import { connect } from 'react-redux';
import Sidebar from './Component';

const mapStateToProps = state => ({ isLoggedIn: !!state.auth.token });

const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;
