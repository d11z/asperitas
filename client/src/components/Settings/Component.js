import React, { useEffect } from 'react';
import styled from 'styled-components/macro';

import withAuth from '../../util/withAuth';
import SettingsHeader from './SettingsHeader';
import SettingsBlock from './SettingsBlock';
import Setting from './Setting';

const SettingsWrapper = styled.div`
  padding: 0 10vw;
`;

const Settings = props => {
  useEffect(() => {
    if (!props.token) {
      props.history.push('/');
    }
  }, []);

  return (
    <SettingsWrapper>
      <SettingsHeader>Account Settings</SettingsHeader>
      <SettingsBlock title='Account preferences'>
        <Setting
          textPrimary='Change password'
          textSecondary='Password must be at least 8 characters long'
          btnText='Change'
          onClick={() => props.history.push('/changepassword')}
        />
      </SettingsBlock>
    </SettingsWrapper>
  );
};

export default withAuth(Settings);
