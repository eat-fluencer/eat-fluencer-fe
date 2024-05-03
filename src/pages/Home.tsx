import {Text, TouchableHighlight, View} from 'react-native';
import React, {useContext} from 'react';
import GlobalContext from '../contexts/global-context';

function Home() {
  const {user} = useContext(GlobalContext);
  console.log(JSON.stringify(user, null, '\t'));

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableHighlight>
        <Text>안녕하세요 {user.nickname} 님!</Text>
      </TouchableHighlight>
    </View>
  );
}

export default Home;
