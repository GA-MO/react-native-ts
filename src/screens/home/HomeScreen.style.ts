import { StyleSheet } from 'react-native';
import { ScreenWidth } from '@freakycoder/react-native-helpers';

import theme from '../../configs/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  titleTextStyle: {
    fontSize: 32,
  },
  buttonStyle: {
    height: 45,
    width: ScreenWidth * 0.9,
    marginTop: 32,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    shadowRadius: 5,
    shadowOpacity: 0.7,
    shadowColor: theme.colors.shadow,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  buttonTextStyle: {
    color: theme.colors.white,
    fontWeight: '700',
  },
  header: {
    width: ScreenWidth * 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 1,
    marginTop: 16,
  },
  listContainer: {
    marginTop: 8,
  },
  profilePicImageStyle: {
    height: 50,
    width: 50,
    borderRadius: 30,
  },
});
