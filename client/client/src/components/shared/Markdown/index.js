import React from 'react';
import styled from 'styled-components/macro';
import ReactMarkdown from 'react-markdown';
import breaks from 'remark-breaks';
import renderers from './renderers';

const StyledReactMarkdown = styled(ReactMarkdown)`
  color: ${props => props.theme.normalText};
  font-size: 15px;
  line-height: 1.5;

  p,
  ol,
  ul,
  pre,
  table {
    margin-bottom: 0.5em;
  }

  code {
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier,
      monospace;
    font-size: 14px;
    line-height: 1.25;
  }

  > :last-child {
    margin-bottom: 0;
  }

  > :first-child {
    margin-top: 0;
  }
`;

const allowed = [
  'text',
  'paragraph',
  'emphasis',
  'strong',
  'delete',
  'heading',
  'link',
  'code',
  'table',
  'tableHead',
  'tableBody',
  'tableRow',
  'tableCell',
  'html',
  'thematicBreak',
  'list',
  'listItem',
  'inlineCode'
];

const Markdown = props => (
  <StyledReactMarkdown
    source={props.children}
    plugins={[breaks]}
    allowedTypes={allowed}
    renderers={renderers}
    unwrapDisallowed
  />
);

export default Markdown;
