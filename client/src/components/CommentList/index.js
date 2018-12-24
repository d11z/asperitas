import React from 'react';
import styled from 'styled-components/macro';
import CommentListItem from './Item';

const List = styled.ul`
  flex: 3;
  margin-right: 16px;
  list-style: none;
`;

const mapComments = comments =>
  comments.map((comment, index) => (
    <CommentListItem key={index} {...comment} />
  ));

const CommentList = props => <List>{mapComments(props.comments)}</List>;

export default CommentList;
