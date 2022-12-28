import React from 'react';
import { View } from 'react-native';
import { Button, useTheme } from 'react-native-paper';

import styles from './ProfileScreen.style';
import Text from '../../shared/components/text-wrapper/TextWrapper';
import { AppTheme } from '../../configs/themes';
import { useCounterStore } from '../../stores/counter';

interface ProfileScreenProps {}

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  const theme = useTheme<AppTheme>();
  const { colors } = theme;

  const counterStore = useCounterStore();

  return (
    <View style={styles.container}>
      <Text h1 color={colors.text}>
        Profile
      </Text>
      <Button mode="contained" onPress={() => counterStore.increase()}>
        Couter: {counterStore.count}
      </Button>
    </View>
  );
};

export default ProfileScreen;
