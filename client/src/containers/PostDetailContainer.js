import { connect } from 'react-redux';
import PostDetail from '../components/PostDetail';

const findPost = (posts, id) => posts.find(post => post.id === id);

export const mapStateToProps = (state, ownProps) => ({
  post: findPost(state.posts.items, ownProps.postId)
});

export default connect(mapStateToProps)(PostDetail);
