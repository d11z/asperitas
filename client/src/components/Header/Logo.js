import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: auto;
  padding: 0 16px;
  font-size: 24px;
  font-weight: 500;
  color: ${props => props.theme.normalText};
  text-decoration: none;
`;

const HeaderLogo = () => <Logo to='/'>asperitas</Logo>;

export default HeaderLogo;
