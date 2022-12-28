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
  },
  descriptionTextStyle: {
    marginTop: 8,
  },
  contentContainer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  languageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  languageColorStyle: {
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: theme.colors.primary,
  },
  starContainer: {
    marginLeft: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  valueTextStyle: {
    marginLeft: 8,
  },
  forkContainer: {
    marginLeft: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
