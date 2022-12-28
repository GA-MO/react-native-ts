import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-dynamic-vector-icons';
import RNBounceable from '@freakycoder/react-native-bounceable';

import styles from './CardItem.style';
import Text from '../../../../shared/components/text-wrapper/TextWrapper';
import { AppTheme } from '../../../../configs/themes';

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface ICardItem {
  name: string;
  description: string;
  language: string;
  star: number;
  fork: number;
}

interface ICardItemProps {
  style?: CustomStyleProp;
  data: ICardItem;
  onPress: () => void;
}

const CardItem: React.FC<ICardItemProps> = ({ style, data, onPress }) => {
  const theme = useTheme<AppTheme>();
  const { colors } = theme;

  const { name, description, language, star, fork } = data;

  const Header = () => (
    <>
      <Text h4 bold color={colors.text}>
        {name}
      </Text>
      <Text h5 color={colors.tertiary} style={styles.descriptionTextStyle}>
        {description}
      </Text>
    </>
  );

  const Language = () => (
    <View style={styles.languageContainer}>
      <View style={styles.languageColorStyle} />
      <Text style={styles.valueTextStyle}>{language}</Text>
    </View>
  );

  const Star = () => (
    <View style={styles.starContainer}>
      <Icon name="star-o" type="FontAwesome" color={colors.text} />
      <Text style={styles.valueTextStyle}>{star}</Text>
    </View>
  );

  const Fork = () => (
    <View style={styles.forkContainer}>
      <Icon name="code-fork" type="FontAwesome" color={colors.text} />
      <Text style={styles.valueTextStyle}>{fork}</Text>
    </View>
  );

  return (
    <RNBounceable style={[styles.container, style]} onPress={onPress}>
      <Header />
      <View style={styles.contentContainer}>
        <Language />
        <Star />
        <Fork />
      </View>
    </RNBounceable>
  );
};

export default CardItem;
