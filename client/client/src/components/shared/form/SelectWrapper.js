import styled from 'styled-components/macro';

const SelectWrapper = styled.div`
  position: relative;
  ${props => props.flex && 'flex: 1'};
  
  ::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-150%, calc(-50% - 2px)) rotate(45deg);
    border-bottom: 2px solid ${props => props.theme.accent};
    border-right: 2px solid ${props => props.theme.accent};
    width: 8px;
    height: 8px;
    pointer-events: none;
  }
`;

export default SelectWrapper;
