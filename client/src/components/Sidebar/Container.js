import { connect } from 'react-redux';
import Sidebar from './Component';

const mapStateToProps = state => ({ token: state.auth.token });

const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;
