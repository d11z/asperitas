import React from 'react';
import { shallow } from 'enzyme';

import SettingsBlock from '../components/Settings/SettingsBlock';
import SettingsHeader from '../components/Settings/SettingsHeader';
import Setting from '../components/Settings/Setting';

it('renders without crashing', () => {
  shallow(<SettingsBlock title='A sample block' />);
  shallow(<SettingsHeader />);
  shallow(
    <Setting
      textPrimary='Primary'
      textSecondary='Secondary'
      btnText='A button'
      onClick={fn => fn}
    />
  );
});
