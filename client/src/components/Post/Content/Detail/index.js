import React from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';
import { smallFont } from '../../../shared/helpers';
import PostContentDetailAuthor from './Author';
import PostContentDetailCommentsLink from './CommentsLink';

const Wrapper = styled.div`
  ${smallFont};
  
  margin-top: auto;
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
    <span>{moment(props.created).fromNow()}</span>
    <PostContentDetailCommentsLink to={`/a/${props.category}/${props.id}`}>
      {props.commentCount} comment{props.commentCount !== 1 ? 's' : null}
    </PostContentDetailCommentsLink>
  </Wrapper>
);

export default PostContentDetail;
