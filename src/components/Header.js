import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 24px;
  background-color: #282c34;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  margin: 0;
  color: #ffffff;
`;

const Subreddit = styled.h2`
  margin: 0 0 0 24px;
  color: #ffffff;
`;

const StyledLink = styled.a`
  color: #ffffff;
  
  :not(:first-child) {
    margin-left: 16px;
  }
`;

const Header = props => (
  <Wrapper>
    <LogoWrapper>
      <Logo>reddit</Logo>
      {props.subreddit && <Subreddit>r/{props.subreddit}</Subreddit>}
    </LogoWrapper>
    <div>
      <StyledLink href='/'>log in</StyledLink>
      <StyledLink href='/'>sign up</StyledLink>
    </div>
  </Wrapper>
);

export default Header;
