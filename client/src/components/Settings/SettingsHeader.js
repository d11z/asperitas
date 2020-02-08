import styled from 'styled-components/macro';
import { headerItem } from '../shared/helpers';

const SettingsHeader = styled.h1`
  ${headerItem};

  margin-right: auto;
  font-size: 40px;
  font-weight: 500;
  color: ${props => props.theme.normalText};
  text-decoration: none;

  @media (max-width: 425px) {
    padding: 0 8px 0 16px;
    font-size: 19px;
  }
`;

export default SettingsHeader;
