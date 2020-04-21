import React from 'react';
import styled from 'styled-components/macro';
import CommentListItem from './Item';

const List = styled.ul`
  margin-top: 16px;
  list-style: none;
`;

const mapComments = comments =>
  comments.map((comment, index) => (
    <CommentListItem key={index} {...comment} />
  ));

const sortComments = comments =>
  comments.sort((a, b) => new Date(b.created) - new Date(a.created));

const CommentList = ({ comments }) =>
  comments && <List>{mapComments(sortComments(comments))}</List>;

export default CommentList;
