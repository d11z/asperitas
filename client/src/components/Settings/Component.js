import React from 'react';
import styled from 'styled-components/macro';

import SettingsHeader from './SettingsHeader';
import SettingsBlock from './SettingsBlock';
import Setting from './Setting';

const SettingsWrapper = styled.div`
  padding: 0 10vw;
`;

const Settings = () => (
  <SettingsWrapper>
    <SettingsHeader>Account Settings</SettingsHeader>
    <SettingsBlock title='Account preferences'>
      <Setting
        textPrimary='Change password'
        textSecondary='Password must be at least 8 characters long'
        btnText='Change'
        onClick={() => console.log('kek')}
      />
    </SettingsBlock>
  </SettingsWrapper>
);

export default Settings;
