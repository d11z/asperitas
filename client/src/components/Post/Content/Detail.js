import React from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  margin-top: auto;
  color: #6f6f6f;

  & > * {
    margin-right: 4px;
  }
`;

const PostContentDetail = props => (
  <Wrapper>
    <span>by</span>
    <span>{props.author && props.author.username}</span>
    <span>{moment(props.created).fromNow()}</span>
    <Link to={`/a/${props.category}/${props.id}`}>
      {props.comments} comment{props.comments !== 1 ? 's' : null}
    </Link>
  </Wrapper>
);

export default PostContentDetail;
