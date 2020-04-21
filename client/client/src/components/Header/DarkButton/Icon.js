import React from 'react';
import styled from 'styled-components/macro';
import { transition } from '../../shared/helpers';

const Icon = styled.svg`
  width: 20px;
  height: 20px;

  & path {
    ${transition('fill')};

    fill: ${props => props.theme.mutedText};
  }
  
  @media (max-width: 425px) {
    width: 18px;
    height: 18px;
  }
`;

const HeaderDarkButtonIcon = () => (
  <Icon viewBox='0 0 24 24'>
    <path
      d='M6.03569223,7.86020138e-11 C4.77338857,1.342144 4,3.14939605 4,5.13728269 C4,9.27941831 7.35786438,12.6372827 11.5,12.6372827 C13.4878866,12.6372827 15.2951387,11.8638941 16.6372827,10.6015905 C15.5809549,14.0943073 12.3374493,16.6372827 8.5,16.6372827 C3.80557963,16.6372827 0,12.8317031 0,8.13728269 C0,4.29983338 2.54297542,1.05632781 6.03569223,0 Z'
      transform='translate(4 4)'
    />
  </Icon>
);

export default HeaderDarkButtonIcon;
