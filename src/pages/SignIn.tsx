import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

function SignIn() {
  return (
    <View style={styles.container}>
      <Image
        // style={styles.image}
        source={require('../assets/kakao_login_medium_wide.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'tomato',
    justifyContent: 'center',
  },
});

export default SignIn;
