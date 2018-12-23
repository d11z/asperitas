import React from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';

const Timestamp = styled.span`
  color: #6f6f6f;
`;

const DetailTimestamp = props => (
  <Timestamp>
    {moment(props.created).fromNow()}
  </Timestamp>
);

export default DetailTimestamp;
