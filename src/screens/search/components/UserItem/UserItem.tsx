import React from 'react';
import { View, Image } from 'react-native';
import RNBounceable from '@freakycoder/react-native-bounceable';

import styles from './UserItem.style';
import Text from '../../../../shared/components/text-wrapper/TextWrapper';

interface Props {
  avatar: string;
  name: string;
  email: string;
}

const UserItem: React.FC<Props> = ({ avatar, name, email }) => {
  return (
    <RNBounceable style={styles.container}>
      <Image
        source={{ uri: avatar }}
        resizeMode="cover"
        style={styles.avatar}
      />

      <View style={styles.contentContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </RNBounceable>
  );
};

export default UserItem;
