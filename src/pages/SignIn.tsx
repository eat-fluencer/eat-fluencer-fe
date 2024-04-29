import {Text, View, Image, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {login} from '@react-native-seoul/kakao-login';

const signInWithKakao = async (): Promise<void> => {
  try {
    const token = await login();
    console.log(token);
  } catch (err) {
    console.error('login err', err);
  }
};

function SignIn() {
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
