import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuth from '../../util/withAuth';
import { fetchPost } from '../../actions/posts';
import PostDetail from './Component';

export const mapStateToProps = state => ({
  isFetching: state.posts.isFetching,
  post: state.posts.post
});

const mapDispatchToProps = { fetchPost };

const enhance = compose(
  withAuth,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

const PostDetailContainer = enhance(PostDetail);

export default PostDetailContainer;
