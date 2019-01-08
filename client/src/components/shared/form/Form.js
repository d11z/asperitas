import styled from 'styled-components/macro';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  border: 1px solid ${props => props.theme.border};
  border-radius: 2px;
  max-width: 370px;
  padding: 24px;
  background-color: #ffffff;
`;

export default Form;
