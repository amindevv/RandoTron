import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {Home} from './';
import {configureStore} from '../redux/Store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Containers} from '../config/Const';
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

const RootNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen component={Home} name={Containers.HOME} options={Header} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <Provider store={configureStore}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
