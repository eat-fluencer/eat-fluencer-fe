import {Text, TouchableHighlight, View} from 'react-native';
import React, {useContext} from 'react';
import GlobalContext from '../contexts/global-context';

function Home() {
  const {userEmail} = useContext(GlobalContext);
  console.log(userEmail);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableHighlight>
        <Text>home page</Text>
      </TouchableHighlight>
    </View>
  );
}

export default Home;
