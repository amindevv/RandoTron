import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

const Header = (): NativeStackNavigationOptions => {
  const options: NativeStackNavigationOptions = {
    title: 'RandoTron',
    headerStyle: {
      backgroundColor: '#2c3e50',
    },
    headerTintColor: 'white',
    headerTitleAlign: 'center',
  };

  return options;
};

export default Header;
