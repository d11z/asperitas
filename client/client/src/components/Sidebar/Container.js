import withAuth from '../../util/withAuth';
import Sidebar from './Component';

const SidebarContainer = withAuth(Sidebar);

export default SidebarContainer;
