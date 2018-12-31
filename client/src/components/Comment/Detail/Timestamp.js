import React from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';

const Timestamp = styled.span`
  color: ${props => props.theme.mutedText};
`;

const DetailTimestamp = props => (
  <Timestamp>
    {moment(props.created).fromNow()}
  </Timestamp>
);

export default DetailTimestamp;
