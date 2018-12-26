import React from 'react';
import styled from 'styled-components/macro';
import CommentListItem from './Item';

const List = styled.ul`
  list-style: none;
`;

const mapComments = comments =>
  comments.map((comment, index) => (
    <CommentListItem key={index} {...comment} />
  ));

const CommentList = ({ comments }) =>
  comments && <List>{mapComments(comments)}</List>;

export default CommentList;
