import {Text, View} from 'react-native';
import React, {useContext} from 'react';
import GlobalContext from '../contexts/global-context';

function SignUp() {
  const {isSearchFocus} = useContext(GlobalContext);
  console.log(isSearchFocus);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>home page {isSearchFocus}</Text>
    </View>
  );
}

export default SignUp;
