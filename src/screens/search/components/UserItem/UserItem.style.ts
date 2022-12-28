import { ScreenWidth } from '@freakycoder/react-native-helpers';
import { StyleSheet } from 'react-native';

import theme from '../../../../configs/themes';

export default StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 16,
    borderWidth: 1,
    borderRadius: 8,
    width: ScreenWidth * 0.9,
    borderColor: theme.colors.outline,
    backgroundColor: theme.colors.background,
    flexDirection: 'row',
  },
  contentContainer: {
    marginLeft: 16,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 30,
  },
  name: {
    marginTop: 6,
  },
  email: {
    marginTop: 8,
  },
});
