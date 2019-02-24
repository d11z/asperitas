import { css, keyframes } from 'styled-components';

export const smallFont = css`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const wideFont = css`
  ${smallFont};
  font-weight: 700;
  letter-spacing: 0.05em;
`;

const fadeKeyframes = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const fade = css`
  animation: ${fadeKeyframes} 0.25s;
`;

export const transition = (...props) => {
  let str = 'transition: ';
  props.forEach((item, index) => {
    str = str.concat(
      `${item} 0.1s ease${index === props.length - 1 ? ';' : ', '}`
    );
  });
  return str;
};

export const headerItem = css`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 0 16px;

  @media (max-width: 425px) {
    padding: 0 8px;
  }
`;

export const link = props => css`
  ${transition('color')};

  text-underline-position: under;
  text-decoration: none;
  color: ${props => props.theme.normalText};

  :hover {
    ${props.underline && 'text-decoration: underline'};
    color: ${props => props.theme.accent};
  }
`;

export const overflow = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
