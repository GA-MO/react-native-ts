import React from 'react';
import { View } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import * as NavigationService from 'react-navigation-helpers';

import styles from './DetailScreen.style';
import Text from '../../shared/components/text-wrapper/TextWrapper';
import { AppTheme } from '../../configs/themes';

interface DetailScreenProps {}

const DetailScreen: React.FC<DetailScreenProps> = () => {
  const theme = useTheme<AppTheme>();

  return (
    <View style={styles.container}>
      <Text h1 color={theme.colors.text}>
        Detail Screen
      </Text>
      <Button mode="contained" onPress={() => NavigationService.goBack()}>
        Go back to Home
      </Button>
    </View>
  );
};

export default DetailScreen;
