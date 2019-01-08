import { css, keyframes } from 'styled-components';

export const smallFont = props => css`
  font-size: 12px;
  font-weight: ${props.wide ? 600 : 500};
  text-transform: uppercase;
  ${props.wide && 'letter-spacing: 0.05em'};
`;

const fadeKeyframes = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const fade = css`
  animation: ${fadeKeyframes} 0.25s;
`;

export const transition = props => css`
  transition: all ${props.slow ? '0.3s' : '0.15s'} ease;
`;

export const headerItem = css`
  display: flex;
  align-items: center;
  padding: 0 16px;
`;

export const link = props => css`
  ${transition};
  
  ${props.underline && 'border-bottom: 1px solid transparent'};
  text-decoration: none;
  
  :hover {
    ${props.underline && 'border-bottom: 1px solid'};
    color: ${props => props.theme.accent};
  }
`;
