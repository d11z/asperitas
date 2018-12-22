import React from 'react';
import styled from 'styled-components/macro';
import VoteButton from './Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30px;
  padding: 4px;
  background-color: #f0f0f0;
  font-size: 13px;
  line-height: 24px;
  font-weight: 500;
  text-align: center;
`;

const PostVote = props => (
  <Wrapper>
    <VoteButton />
    <span>{props.score}</span>
    <VoteButton />
  </Wrapper>
);

export default PostVote;
