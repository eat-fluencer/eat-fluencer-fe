import * as React from 'react';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text, TouchableHighlight, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useCallback} from 'react';

// type RootStackParamList = {
//   Home: undefined;
//   Details: undefined;
// };
// type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type DetailsScreenProps = NativeStackScreenProps<ParamListBase, 'Details'>;

const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableHighlight>
        <Text>Home Screen</Text>
      </TouchableHighlight>
    </View>
  );
}

function DetailsScreen({navigation}: DetailsScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableHighlight onPress={onClick}>
        <Text>Details Screen</Text>
      </TouchableHighlight>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Overview'}}
        />
        <Tab.Screen name="Details">
          {props => <DetailsScreen {...props} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
