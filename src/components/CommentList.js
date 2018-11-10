import React from 'react';
import styled from 'styled-components/macro';
import Comment from './Comment';

const List = styled.ul`
  list-style: none;
`;

const Item = styled.li`
  margin-bottom: 8px;
`;

const mapComments = comments => comments.map((comment, index) => (
  <Item key={index}>
    <Comment {...comment}/>
  </Item>
));

const CommentList = props => (
  <List>
    {props.comments && mapComments(props.comments)}
  </List>
);

export default CommentList;
