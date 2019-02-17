import { connect } from 'react-redux';
import { fetchPosts, fetchProfile } from '../../actions/posts';
import PostList from './Component';

export const mapStateToProps = state => ({
  posts: state.posts.items,
  isFetching: state.posts.isFetching
});

const mapDispatchToProps = { fetchPosts, fetchProfile };

const PostListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);

export default PostListContainer;
