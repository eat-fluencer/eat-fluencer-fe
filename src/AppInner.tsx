import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './pages/Home';
import Detail from './pages/Detail';
import GlobalContext from './contexts/global-context';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

function AppInner() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const {user} = useContext(GlobalContext);
  const isLoggedIn = !!user.existedUser;
  console.log('❗️❗️❗️❗️❗️❗️❗️❗️❗️', isLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{title: 'Overview'}}
          />
          <Tab.Screen name="Details">
            {props => <Detail {...props} />}
          </Tab.Screen>
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{title: '로그인'}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{title: '회원가입'}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default AppInner;
