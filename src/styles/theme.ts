
import { MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { bar } from './bar';
import { colors } from './colors';
import globalStyles from './globalStyles';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    mainColor: colors.mainColor,
    secondColor: colors.secondColor,
    mainTextColor: colors.mainTextColor,
    secondTextColor: colors.secondTextColor,
    thirdTextColor: colors.thirdTextColor,
    bgAppColor: colors.bgAppColor,
  },
  containerApp: globalStyles.containerApp,
  box: globalStyles.box,
  texting: globalStyles.texting,
  topCard: globalStyles.topCard,
  topTitle: globalStyles.topTitle,
  topDescription: globalStyles.topDescription,
  modal: globalStyles.modal,
  logoTitle: globalStyles.logoTitle,
  bar: bar.container,
  barText: bar.barText,
  button: globalStyles.button,
  buttonOutlined: globalStyles.buttonOutlined,
  fabText: globalStyles.fabText,
  fabTextOutlined: globalStyles.fabTextOutlined,
  footer: globalStyles.footer,
};

export default theme
