import { connect } from 'react-redux';
import { toggleDarkTheme } from '../../../actions/theme';
import HeaderDarkButton from './Component';

const mapDispatchToProps = { toggleDarkTheme };

const HeaderDarkButtonContainer = connect(
  null,
  mapDispatchToProps
)(HeaderDarkButton);

export default HeaderDarkButtonContainer;
