import React from 'react';
import headingRenderer from './heading';
import linkRenderer from './link';
import codeRenderer from './code';
import inlineCodeRenderer from './inlineCode';
import tableRenderer from './table';
import tableCellRenderer from './tableCell';
import thematicBreakRenderer from './thematicBreak';
import listRenderer from './list';

const renderers = {
  heading: headingRenderer,
  link: linkRenderer,
  code: codeRenderer,
  inlineCode: inlineCodeRenderer,
  table: tableRenderer,
  tableCell: tableCellRenderer,
  thematicBreak: thematicBreakRenderer,
  list: listRenderer,
  html: props => <p>{props.value}</p>
};

export default renderers;
