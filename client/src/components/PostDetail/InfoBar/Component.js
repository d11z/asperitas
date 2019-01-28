import React from 'react';
import styled from 'styled-components/macro';
import PostDetailInfoBarDeleteButton from './DeleteButton';

const Wrapper = styled.div`
  border-left: 1px solid ${props => props.theme.border};
  border-right: 1px solid ${props => props.theme.border};
  padding: 8px;
  background-color: #ffffff;
  font-size: 13px;
  color: ${props => props.theme.mutedText};
`;

class PostDetailInfoBar extends React.Component {
  deletePost = () => {
    this.props.attemptDeletePost(this.props.id, this.props.token);
  };

  render() {
    return (
      <Wrapper>
        <span>{this.props.views} views</span>
        <span> | </span>
        <span>{this.props.upvotePercentage}% upvoted</span>
        {this.props.token && this.props.user.id === this.props.author.id && (
          <>
            <span> | </span>
            <PostDetailInfoBarDeleteButton deletePost={this.deletePost} />
          </>
        )}
      </Wrapper>
    );
  }
}

export default PostDetailInfoBar;
