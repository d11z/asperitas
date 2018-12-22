import React from 'react';
import styled from 'styled-components/macro';

const Url = styled.span`
  color: #6f6f6f;
`;

const ContentUrl = props => <Url>{props.url}</Url>;

export default ContentUrl;
