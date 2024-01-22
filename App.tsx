import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
} from 'react-native';
import React, {useCallback} from 'react';

function App() {
  const onSubmit = useCallback(() => {
    Alert.alert('알림', '로그인 눌렀음');
  }, []);

  return (
    <View style={styles.page}>
      <View>
        <Text>로그인</Text>
        <TextInput
          placeholder="아이디를 입력 해주세요"
          style={styles.inputBox}></TextInput>
      </View>
      <View>
        <Text>비밀번호</Text>
        <TextInput
          placeholder="비밀번호를 입력해주세요"
          style={styles.inputBox}></TextInput>
      </View>
      <View>
        <Pressable onPress={onSubmit} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>로그인</Text>
        </Pressable>
        <Pressable>
          <Text>회원가입</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: 150,
    alignItems: 'center',
  },
  loginButtonText: {},
  inputBox: {
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 0.5,
    width: 400,
    margin: 10,
  },
  page: {
    alignItems: 'center',
  },
});

export default App;
