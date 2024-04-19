import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './pages/Home';
import Detail from './pages/Detail';

function AppInner() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{title: 'Overview'}}
        />
        <Tab.Screen name="Details">{props => <Detail {...props} />}</Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppInner;
