import { connect } from 'react-redux';
import PostDetail from './Component';

const findPost = (posts, id) => posts.find(post => post.id === id);

export const mapStateToProps = (state, ownProps) => ({
  post: findPost(state.posts.items, ownProps.postId)
});

const PostDetailContainer = connect(mapStateToProps)(PostDetail);

export default PostDetailContainer;
