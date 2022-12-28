import React from 'react';
import { View, FlatList } from 'react-native';
import { useTheme } from 'react-native-paper';

import styles from './SearchScreen.style';
import Text from '../../shared/components/text-wrapper/TextWrapper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppTheme } from '../../configs/themes';
import { useUsers } from '../../services/user';
import UserItem from './components/UserItem/UserItem';

interface SearchScreenProps {}

const SearchScreen: React.FC<SearchScreenProps> = () => {
  const theme = useTheme<AppTheme>();

  const { data, isLoading, isSuccess, isError } = useUsers();

  const List = () => (
    <View style={styles.listContainer}>
      <FlatList
        data={data?.data}
        renderItem={({ item }) => (
          <UserItem
            avatar={item.avatar}
            name={`${item.first_name} ${item.last_name}`}
            email={item.email}
          />
        )}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text h1 color={theme.colors.text}>
        Search
      </Text>
      {isError && <Text h2>Error</Text>}
      {isLoading && <Text>Loading...</Text>}
      {isSuccess && <List />}
    </SafeAreaView>
  );
};

export default SearchScreen;
