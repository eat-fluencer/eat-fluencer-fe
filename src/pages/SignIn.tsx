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
  const {setUser} = useContext(GlobalContext);

  const signInWithKakao = async (): Promise<void> => {
    try {
      const {idToken} = await login();
      // console.log(JSON.stringify(idToken, null, '\t'));
      // console.log(idToken);
      // 프로필 조회
      const profile = await getKakaoProfile();
      // console.log(JSON.stringify(profile, null, '\t'));

      const {data} = await axios.post(
        `${Config.API_URL}/users/registration-status`,
        {
          provider_id: profile?.id,
          provider: 'kakao',
        },
      );
      console.log(JSON.stringify(data, null, '\t'));

      // console.log({
      //   kakaoToken: idToken,
      //   id: profile.id,
      //   nickname: profile.nickname,
      //   picture: profile.profileImageUrl,
      // });

      const existedUser = data.data.signedUp;

      console.log('existedUser ', existedUser);
      setUser({
        kakaoToken: idToken,
        id: profile.id,
        nickname: profile.nickname,
        picture: profile.profileImageUrl,
        existedUser,
      });

      if (!existedUser) {
        navigation.navigate('SignUp');
      }
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
