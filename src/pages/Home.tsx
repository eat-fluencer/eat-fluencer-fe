import {Text, TouchableHighlight, View} from 'react-native';
import React, {useContext} from 'react';
import GlobalContext from '../contexts/global-context';

function Home() {
  const {isSearchFocus} = useContext(GlobalContext);
  console.log(isSearchFocus);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableHighlight>
        <Text>home page {isSearchFocus}</Text>
      </TouchableHighlight>
    </View>
  );
}

export default Home;
