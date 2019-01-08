import React from 'react';
import styled from 'styled-components/macro';
import { smallFont } from '../../shared/helpers';

const Header = styled.span`
  ${smallFont({ wide: true })};
  
  display: block;
  padding: 12px;
  text-align: center;
  color: ${props => props.theme.mutedText};
`;

const SidebarCategoryListHeader = () => <Header>categories</Header>;

export default SidebarCategoryListHeader;
