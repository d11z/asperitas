import styled from 'styled-components/macro';

const FormWrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  border: 1px solid ${props => props.theme.border};
  border-radius: 2px;
  max-width: ${props => (props.wide ? '500px' : '370px')};
  padding: 24px;
  background-color: ${props => props.theme.foreground};
`;

export default FormWrapper;
