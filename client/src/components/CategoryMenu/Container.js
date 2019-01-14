import { connect } from 'react-redux';
import CategoryMenu from './Component';

const mapStateToProps = state => ({ token: state.auth.token });

const CategoryMenuContainer = connect(mapStateToProps)(CategoryMenu);

export default CategoryMenuContainer;
