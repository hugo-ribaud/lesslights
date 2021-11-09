import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as ScreenOrientation from 'expo-screen-orientation';
import Login from './pages/login';
// import Register from './pages/register';
import Home from './pages/home';

const Stack = createStackNavigator();
ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);


export default class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
        >
          <Stack.Screen name="Login" component={Login} />
          {/*<Stack.Screen name="Register" component={Register} />*/}
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
