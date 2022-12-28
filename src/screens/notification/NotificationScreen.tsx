import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'react-native-paper';

import styles from './NotificationScreen.style';
import Text from '../../shared/components/text-wrapper/TextWrapper';
import { AppTheme } from '../../configs/themes';

interface ProfileScreenProps {}

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  const theme = useTheme<AppTheme>();
  const { colors } = theme;

  return (
    <View style={styles.container}>
      <Text h1 color={colors.text}>
        Notification
      </Text>
    </View>
  );
};

export default ProfileScreen;
