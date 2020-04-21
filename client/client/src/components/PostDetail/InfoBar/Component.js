import React from 'react';
import styled from 'styled-components/macro';
import DeleteButton from '../../shared/DeleteButton';

const Wrapper = styled.div`
  display: flex;
  margin-top: -1px;
  border: 1px solid ${props => props.theme.border};
  ${props => props.round && 'border-radius: 0 0 2px 2px'};
  padding: 8px;
  background-color: ${props => props.theme.foreground};
  font-size: 13px;
  color: ${props => props.theme.mutedText};

  @media (max-width: 768px) {
    border-left: none;
    border-right: none;
  }
`;

class PostDetailInfoBar extends React.Component {
  deletePost = () => this.props.attemptDeletePost();

  render() {
    return (
      <Wrapper round={!this.props.token}>
        <span>{this.props.views} views</span>
        <span>&nbsp;|&nbsp;</span>
        <span>{this.props.upvotePercentage}% upvoted</span>
        {this.props.token &&
          (this.props.user.id === this.props.author.id ||
            this.props.user.admin) && (
            <DeleteButton onClick={this.deletePost} />
          )}
      </Wrapper>
    );
  }
}

export default PostDetailInfoBar;
