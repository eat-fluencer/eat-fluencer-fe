import {Text, View, TextInput, StyleSheet} from 'react-native';
import React, {useState, useContext, useRef} from 'react';
import GlobalContext from '../contexts/global-context';

const user = {
  provider_id: '3454198695',
  provider: 'kakao',
  nickname: '굥다솜',
  picture:
    'http://k.kakaocdn.net/dn/v56yw/btsz5AfTXdC/4YDdkFKOjgnyKM4dvrOBa0/img_110x110.jpg',
};

function SignUp() {
  // const {user} = useContext(GlobalContext);
  // console.log(isSearchFocus);
  const [nickname, setNickname] = useState(user.nickname);
  // const nicknameRef = useRef<TextInput | null>(null);
  // console.log(user);
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>닉네임</Text>
        <TextInput
          placeholder="이름을 입력하세요"
          placeholderTextColor="#666"
          value={nickname}
          returnKeyType="next"
          clearButtonMode="while-editing"
          textContentType="nickname"
          onChangeText={text => setNickname(text)}
          // ref={nicknameRef}
          // onSubmitEditing={() => nicknameRef.current?.focus()}
          blurOnSubmit={false}
        />
      </View>
    </View>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'tomato',
  },
  inputWrapper: {
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20,
  },
});
