import {Text, View, Image, StyleSheet, Pressable, Alert} from 'react-native';
import React, {useContext} from 'react';
import {
  login,
  getProfile as getKakaoProfile,
} from '@react-native-seoul/kakao-login';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import axios from 'axios';
import Config from 'react-native-config';
import GlobalContext from '../contexts/global-context';

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

function SignIn({navigation}: SignInScreenProps) {
  const {setUser, user} = useContext(GlobalContext);

  console.log(user);

  const signInWithKakao = async (): Promise<void> => {
    try {
      const kakaoResponse = await login();
      console.log(JSON.stringify(kakaoResponse, null, '\t'));

      // 프로필 조회
      const profile = await getKakaoProfile();
      console.log(JSON.stringify(profile, null, '\t'));

      const {data} = await axios.post(
        `${Config.API_URL}/users/registration-status`,
        {
          providerId: profile?.id,
          provider: 'kakao',
        },
      );
      const existedUser = data.signedUp;

      if (!existedUser) {
        navigation.navigate('SignUp');
      } else {
        Alert.alert('로그인');
      }

      console.log(JSON.stringify(data, null, '\t'));

      // console.log(JSON.stringify(data, null, '\t'));

      // const {accessToken, idToken} = await login();
      // console.log('accessToken ', accessToken);
      // console.log('idToken ', idToken);

      // console.log(`${Config.API_URL}/kakao/user-info`);
      // const {data} = await axios.get(`${Config.API_URL}/kakao/user-info`, {
      //   headers: {
      //     'OAuth2-Access-Token': accessToken,
      //     'OAuth2-Id-Token': idToken,
      //   },
      // });
      // console.log(JSON.stringify(data, null, '\t'));
      // TODO: context api에 정보 저장
      // setUser(data.user_info);
      // const isRegistered = false;

      // if (!isRegistered) {
      //   navigation.navigate('SignUp');
      // }
    } catch (err) {
      console.error('login err', err);
      // console.error('login err', JSON.stringify(err));
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
