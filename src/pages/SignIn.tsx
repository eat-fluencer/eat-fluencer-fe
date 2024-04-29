import {Text, View, Image, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {login} from '@react-native-seoul/kakao-login';
import axios from 'axios';
import Config from 'react-native-config';

function SignIn() {
  const signInWithKakao = async (): Promise<void> => {
    try {
      const {accessToken, idToken} = await login();
      console.log('accessToken ', accessToken);
      console.log('idToken ', idToken);
      console.log(`${Config.API_URL}/api/oauth2/kakao/user-info`);
      const {data} = await axios.get(
        `${Config.API_URL}/api/oauth2/kakao/user-info`,
        {
          headers: {'OAuth2-Access-Token': accessToken},
        },
      );
      console.log(JSON.stringify(data, null, '\t'));
    } catch (err) {
      console.error('login err', err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>잇플루언서😋</Text>
      <Pressable style={styles.button} onPress={() => signInWithKakao()}>
        <Image
          source={require('../assets/images/kakao_login_large_narrow.png')}
          alt="kakao logIn"
          style={styles.buttonImage}
        />
      </Pressable>
    </View>
  );
}

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  title: {
    fontSize: 30,
  },
  button: {
    width: '98%',
    marginBottom: 20,
  },
  buttonImage: {
    resizeMode: 'contain',
    width: '100%',
  },
});
