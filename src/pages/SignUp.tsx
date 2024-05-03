import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';
import React, {useState, useContext, useCallback} from 'react';
import GlobalContext from '../contexts/global-context';
import axios from 'axios';
import Config from 'react-native-config';

function SignUp() {
  const {user, setUser} = useContext(GlobalContext);
  const [nickname, setNickname] = useState(user.nickname);

  const onChangeNickname = useCallback((text: string) => {
    setNickname(text);
  }, []);

  const onSubmit = async (): Promise<void> => {
    console.log(
      JSON.stringify(
        {
          nickname,
          provider_id: user.id,
          provider: 'kakao',
          picture: user.picture,
        },
        null,
        '\t',
      ),
    );
    try {
      const {data} = await axios.post(
        `${Config.API_URL}/users`,
        {
          nickname,
          provider_id: user.id,
          provider: 'kakao',
          picture: user.picture,
        },
        {
          headers: {
            'OAuth2-Id-Token': user.kakaoToken,
          },
        },
      );
      console.log(JSON.stringify(data, null, '\t'));
      setUser({
        ...user,
        nickname,
        accessToken: data.data.tokens.accessToken,
        existedUser: true,
      });
    } catch (err) {
      console.error('signup err', err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formWrapper}>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="이름을 입력하세요"
            placeholderTextColor="#666"
            value={nickname}
            returnKeyType="next"
            clearButtonMode="while-editing"
            textContentType="nickname"
            onChangeText={onChangeNickname}
            // ref={nicknameRef}
            // onSubmitEditing={() => nicknameRef.current?.focus()}
            blurOnSubmit={false}
            style={styles.input}
          />
          <Image source={{uri: user.picture}} style={styles.image} />
        </View>
      </View>
      <View style={styles.buttonZone}>
        <Pressable style={styles.loginButton} onPress={onSubmit}>
          <Text style={styles.loginButtonText}>회원가입</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'tomato',
    flex: 1,
  },
  inputWrapper: {
    flexDirection: 'row',
  },
  formWrapper: {
    height: '85%',
    padding: 20,
    justifyContent: 'space-between',
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderRadius: 4,
    fontSize: 20,
    width: '70%',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 200,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#e16350',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 30,
  },
  buttonZone: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10,
  },
});
