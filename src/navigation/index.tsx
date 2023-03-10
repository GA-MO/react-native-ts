import React from 'react';
import Icon from 'react-native-dynamic-vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { isReadyRef, navigationRef } from 'react-navigation-helpers';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SCREENS } from '../shared/constants';
import theme from '../configs/themes';

// Screens
import HomeScreen from '../screens/home/HomeScreen';
import SearchScreen from '../screens/search/SearchScreen';
import DetailScreen from '../screens/detail/DetailScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import NotificationScreen from '../screens/notification/NotificationScreen';

// If you want to use stack or tab or both
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigation = () => {
  React.useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);

  const renderTabIcon = (
    route: any,
    focused: boolean,
    color: string,
    size: number,
  ) => {
    let iconName = 'home';
    switch (route.name) {
      case SCREENS.HOME:
        iconName = focused ? 'home' : 'home-outline';
        break;
      case SCREENS.SEARCH:
        iconName = focused ? 'search' : 'search-outline';
        break;
      case SCREENS.NOTIFICATION:
        iconName = focused ? 'notifications' : 'notifications-outline';
        break;
      case SCREENS.PROFILE:
        iconName = focused ? 'person' : 'person-outline';
        break;
      default:
        iconName = focused ? 'home' : 'home-outline';
        break;
    }
    return <Icon name={iconName} type="Ionicons" size={size} color={color} />;
  };

  const renderTabNavigation = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) =>
            renderTabIcon(route, focused, color, size),
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: theme.colors.background,
          },
        })}
      >
        <Tab.Screen name={SCREENS.HOME} component={HomeScreen} />
        <Tab.Screen name={SCREENS.SEARCH} component={SearchScreen} />
        <Tab.Screen
          name={SCREENS.NOTIFICATION}
          component={NotificationScreen}
        />
        <Tab.Screen name={SCREENS.PROFILE} component={ProfileScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={SCREENS.HOME} component={renderTabNavigation} />
        <Stack.Screen name={SCREENS.DETAIL}>
          {(props) => <DetailScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
