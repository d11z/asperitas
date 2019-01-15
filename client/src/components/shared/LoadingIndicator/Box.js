import React from 'react';
import styled from 'styled-components/macro';
import LoadingIndicatorSpinner from './Spinner';

const Box = styled.div`
  position: relative;
  margin: 48px auto 0;
  border: 1px solid ${props => props.theme.border};
  border-radius: 2px;
  width: 72px;
  height: 72px;
  background-color: #ffffff;
`;

const LoadingIndicatorBox = () => (
  <Box>
    <LoadingIndicatorSpinner />
  </Box>
);

export default LoadingIndicatorBox;
