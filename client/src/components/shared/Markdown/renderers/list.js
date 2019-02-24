import React from 'react';
import styled from 'styled-components/macro';

const List = styled.ul`
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 1em;
  padding-left: 2em;
  line-height: 1.75;
`;

const listRenderer = props => {
  if (props.ordered) return <List as='ol'>{props.children}</List>;
  return <List>{props.children}</List>;
};

export default listRenderer;
