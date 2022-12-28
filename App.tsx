import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, useColorScheme, LogBox } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as PaperProvider } from 'react-native-paper';

import theme from './src/configs/themes';
import Navigation from './src/navigation';
import { isAndroid } from '@freakycoder/react-native-helpers';

LogBox.ignoreAllLogs();
const queryClient = new QueryClient();

const App = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === 'dark';

  React.useEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? 'light-content' : 'dark-content');
    if (isAndroid) {
      StatusBar.setBackgroundColor('rgba(0,0,0,0)');
      StatusBar.setTranslucent(true);
    }

    setTimeout(() => {
      SplashScreen.hide();
    }, 750);
  }, [scheme, isDarkMode]);

  return (
    <PaperProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
    </PaperProvider>
  );
};

export default App;
