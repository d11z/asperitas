import styled from 'styled-components/macro';

const SubmitButton = styled.button`
  align-self: flex-end;
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  background-color: #fff;
  color: ${props => props.theme.normalText};
`;

export default SubmitButton;
