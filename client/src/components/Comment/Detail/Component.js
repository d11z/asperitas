import React from 'react';
import styled from 'styled-components/macro';
import CommentDetailAuthor from './Author';
import CommentDetailTimestamp from './Timestamp';
import DeleteButton from '../../shared/DeleteButton';

const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid ${props => props.theme.border};
  padding: 8px;
  font-size: 13px;
`;

class CommentDetail extends React.Component {
  deleteComment = () => this.props.attemptDeleteComment(this.props.id);

  render() {
    return (
      <Wrapper>
        <CommentDetailAuthor>{this.props.author.username}</CommentDetailAuthor>
        <CommentDetailTimestamp created={this.props.created} />
        {this.props.token && this.props.user.id === this.props.author.id && (
          <DeleteButton onClick={this.deleteComment} />
        )}
      </Wrapper>
    );
  }
}

export default CommentDetail;
