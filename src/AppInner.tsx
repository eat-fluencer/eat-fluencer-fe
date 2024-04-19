import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/Home';
import Detail from './pages/Detail';
// import GlobalContext from './contexts/global-context';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

function AppInner() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator<RootStackParamList>();

  // const {userEmail} = useContext(GlobalContext);
  // const userEmail = 'dsy0302@gmail.com';
  // const isLoggedIn = useContext(GlobalContext);
  const isLoggedIn = false;

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} options={{title: '홈'}} />
          {/* <Tab.Screen name="Details">{props => <Detail {...props} />}</Tab.Screen> */}
          <Tab.Screen
            name="Details"
            component={Detail}
            options={{title: '디테일'}}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{title: '로그인', headerShown: false}}
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
