import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const HeaderNavLink = styled(Link)`
  cursor: pointer;
  text-decoration: underline;
  color: #ffffff;

  :not(:first-child) {
    margin-left: 16px;
  }
`;

export default HeaderNavLink;
