import React from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  height: 76px;
`;

const VoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30px;
  padding: 4px;
  background-color: #f0f0f0;
`;

const VoteButton = styled.button`
  height: 22px;
  width: 22px;
`;

const Score = styled.div`
  font-size: 12px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
  font-size: 12px;
`;

const TitleLink = styled.a`
  display: block;
  margin-bottom: 2px;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
`;

const Url = styled.span`
  color: #6f6f6f;
`;

const DetailWrapper = styled.div`
  color: #6f6f6f;

  & > * {
    margin-right: 4px;
  }
`;

const Post = props => (
  <Wrapper>
    <VoteWrapper>
      <VoteButton/>
      <Score>{props.score}</Score>
      <VoteButton/>
    </VoteWrapper>
    <ContentWrapper>
      <div>
        <TitleLink href={props.url}>{props.title}</TitleLink>
        <Url>{props.url}</Url>
      </div>
      <DetailWrapper>
        <span>by</span>
        <a href='/'>{props.author}</a>
        <span>{moment(props.timestamp).fromNow()}</span>
        <Link to={`/r/${props.category}/${props.id}`}>
          <span>{props.comments} comments</span>
        </Link>
      </DetailWrapper>
    </ContentWrapper>
  </Wrapper>
);

export default Post;
