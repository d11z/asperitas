import React from 'react';
import styled from 'styled-components/macro';
import PostListItem from './Item';
import LoadingIndicatorBox from '../shared/LoadingIndicator/Box';
import Empty from '../shared/Empty';

const List = styled.ul`
  list-style: none;
  border: 1px solid ${props => props.theme.border};
  border-radius: 2px;

  @media (max-width: 768px) {
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
  }
`;

class PostList extends React.Component {
  loadPosts = () => {
    const { username, category } = this.props;
    if (username) return this.props.fetchProfile(username);
    return this.props.fetchPosts(category);
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      this.props.category !== prevProps.category ||
      this.props.username !== prevProps.username
    )
      this.loadPosts();
  }

  mapPosts = () =>
    this.props.posts.map((post, index) => (
      <PostListItem key={index} {...post} />
    ));

  render() {
    if (this.props.isFetching) return <LoadingIndicatorBox />;
    if (!this.props.posts || this.props.posts.length === 0) return <Empty />;
    return <List>{this.mapPosts()}</List>;
  }
}

export default PostList;
