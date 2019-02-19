import { connect } from 'react-redux';
import withAuth from '../../util/withAuth';
import Sidebar from './Component';
import { fetchCategories } from '../../actions/categories';

const SidebarContainer = withAuth(Sidebar);

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = {
  fetchCategories
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarContainer);
