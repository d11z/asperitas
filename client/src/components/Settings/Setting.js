import React from 'react';
import styled from 'styled-components/macro';
import Button from '../shared/Button';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  min-height: 100px;
  width: 100%;
`;

const TextPrimary = styled.h3`
  font-size: 1rem;
  color: ${props => props.theme.normalText};
`;

const TextSecondary = styled.p`
  font-size: 0.8rem;
  color: ${props => props.theme.mutedText};
  text-transform: none;
`;

const TextWrapper = styled.div`
  margin: 1rem 1rem 1rem 0;
`;

const Setting = ({ textPrimary, textSecondary, btnText, onClick }) => (
  <Wrapper>
    <TextWrapper>
      <TextPrimary>{textPrimary}</TextPrimary>
      <TextSecondary>{textSecondary}</TextSecondary>
    </TextWrapper>
    <Button onClick={onClick}>{btnText}</Button>
  </Wrapper>
);

export default Setting;
