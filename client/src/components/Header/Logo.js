import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 26px;
  color: #ffffff;
`;

const HeaderLogo = () => <Logo to='/'>asperitas</Logo>;

export default HeaderLogo;
