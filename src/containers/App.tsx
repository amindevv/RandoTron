import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {Home} from './';
import {configureStore} from '../redux/Store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Containers} from '../config/Const';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={configureStore}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Screen component={Home} name={Containers.HOME} />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
