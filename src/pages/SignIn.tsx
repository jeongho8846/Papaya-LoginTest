import {
  NavigationContainer,
  createNavigationContainerRef,
  useNavigationContainerRef,
} from '@react-navigation/native';

import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import axios from 'axios';

function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const emailRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);

  const onChangeEmail = useCallback(text => {
    setEmail(text);
  }, []);
  const onChangePassword = useCallback(text => {
    setPassword(text);
  }, []);

  console.log(email, password);
  // const onSubmit = useCallback(() => {
  //   Alert.alert('알림', '로그인 눌렀음');
  // }, [email, password]);

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'http://52.87.124.70:8080/members/login',
        {
          name: email,
          password: password,
        },
      );
      // 서버에서 반환된 응답을 처리
      console.log(response.data);
      Alert.alert('로그인 성공');
    } catch (error) {
      // 에러 처리
      console.error(error);
      console.log(email, password);
      Alert.alert('로그인 실패', '이메일 또는 비밀번호를 확인해주세요.');
    }
  };

  return (
    <View style={styles.page}>
      <View>
        <Text>로그인</Text>
        <TextInput
          placeholder="아이디를 입력 해주세요"
          value={email}
          onChangeText={onChangeEmail}
          importantForAccessibility="yes"
          autoComplete="email"
          textContentType="emailAddress"
          returnKeyType="next"
          keyboardType="email-address"
          onSubmitEditing={() => {
            passwordRef.current?.focus();
          }}
          blurOnSubmit={false}
          ref={emailRef}
          style={styles.inputBox}></TextInput>
      </View>
      <View>
        <Text>비밀번호</Text>
        <TextInput
          placeholder="비밀번호를 입력해주세요"
          onChangeText={onChangePassword}
          importantForAccessibility="yes"
          autoComplete="password"
          textContentType="password"
          secureTextEntry
          ref={passwordRef}
          onSubmitEditing={handleLogin}
          style={styles.inputBox}></TextInput>
      </View>
      <View>
        <Pressable
          onPress={handleLogin}
          style={
            !email || !password
              ? styles.loginButton
              : [styles.loginButton, styles.loginButtonActive]
          }
          disabled={!email || !password}>
          <Text style={styles.loginButtonText}>로그인</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.signUpButton}>회원가입</Text>
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
  loginButtonActive: {backgroundColor: 'green'},

  loginButtonText: {},
  inputBox: {
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 0.5,
    width: 400,
    margin: 10,
  },

  signUpButton: {
    textAlign: 'center',
  },
  page: {
    alignItems: 'center',
  },
});

export default SignIn;
