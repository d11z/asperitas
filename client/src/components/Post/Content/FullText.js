import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  margin: 8px -8px;
  border: 1px solid ${props => props.theme.border};
  border-left: none;
  border-right: none;
  padding: 8px 12px;
  background-color: ${props => props.theme.inputBackground};

  p {
    max-width: 800px;
    font-size: 15px;
    line-height: 21px;
    color: ${props => props.theme.normalText};
    white-space: pre-line;
  }
`;

const PostContentFullText = props => (
  <Wrapper>
    <p>{props.children}</p>
  </Wrapper>
);

export default PostContentFullText;
