import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import PostList from '../components/PostList';

class PostListContainer extends React.Component {
  componentDidMount() {
    this.loadPosts();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.category !== this.props.category) this.loadPosts();
  }

  loadPosts() {
    this.props.dispatch(fetchPosts(this.props.category));
  }

  render() {
    // TODO: better loading indicator
    if (this.props.isFetching) return null;
    return <PostList posts={this.props.posts} />;
  }
}

export const mapStateToProps = state => ({
  posts: state.posts.items,
  isFetching: state.posts.isFetching
});

export default connect(mapStateToProps)(PostListContainer);
