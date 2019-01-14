import React from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';
import { smallFont } from '../../../shared/helpers';
import PostContentDetailAuthor from './Author';
import PostContentDetailLink from './Link';

const Wrapper = styled.div`
  ${smallFont};
  
  margin-top: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${props => props.theme.mutedText};

  & > * {
    margin-right: 4px;
  }
`;

const PostContentDetail = props => (
  <Wrapper>
    <span>by</span>
    <PostContentDetailAuthor>
      {props.author && props.author.username}
    </PostContentDetailAuthor>
    <span>in</span>
    <PostContentDetailLink to={`/a/${props.category}`}>
      {props.category}
    </PostContentDetailLink>
    <span>{moment(props.created).fromNow()}</span>
    <PostContentDetailLink to={`/a/${props.category}/${props.id}`}>
      {props.commentCount} comment{props.commentCount !== 1 ? 's' : null}
    </PostContentDetailLink>
  </Wrapper>
);

export default PostContentDetail;
