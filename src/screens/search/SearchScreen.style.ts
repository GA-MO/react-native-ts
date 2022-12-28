import { StyleSheet } from 'react-native';

import theme from '../../configs/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    marginTop: 10,
  },
  listContainer: {
    flex: 1,
  },
});
