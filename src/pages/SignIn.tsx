// import 'react-native-gesture-handler';
// import {
//   NavigationContainer,
//   createNavigationContainerRef,
//   useNavigationContainerRef,
// } from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

// import {
//   View,
//   Text,
//   TextInput,
//   Pressable,
//   Alert,
//   StyleSheet,
// } from 'react-native';
// import React, {useCallback, useRef, useState} from 'react';

// function SignIn() {
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const emailRef = useRef<TextInput | null>(null);
//   const passwordRef = useRef<TextInput | null>(null);

//   const onChangeEmail = useCallback(text => {
//     setEmail(text);
//   }, []);
//   const onChangePassword = useCallback(text => {
//     setPassword(text);
//   }, []);

//   const onSubmit = useCallback(() => {
//     Alert.alert('알림', '로그인 눌렀음');
//   }, [email, password]);

//   return (
//     <View style={styles.page}>
//       <View>
//         <Text>로그인</Text>
//         <TextInput
//           placeholder="아이디를 입력 해주세요"
//           value={email}
//           onChangeText={onChangeEmail}
//           importantForAccessibility="yes"
//           autoComplete="email"
//           textContentType="emailAddress"
//           returnKeyType="next"
//           keyboardType="email-address"
//           onSubmitEditing={() => {
//             passwordRef.current?.focus();
//           }}
//           blurOnSubmit={false}
//           ref={emailRef}
//           style={styles.inputBox}></TextInput>
//       </View>
//       <View>
//         <Text>비밀번호</Text>
//         <TextInput
//           placeholder="비밀번호를 입력해주세요"
//           onChangeText={onChangePassword}
//           importantForAccessibility="yes"
//           autoComplete="password"
//           textContentType="password"
//           secureTextEntry
//           ref={passwordRef}
//           onSubmitEditing={onSubmit}
//           style={styles.inputBox}></TextInput>
//       </View>
//       <View>
//         <Pressable
//           onPress={onSubmit}
//           style={
//             !email || !password
//               ? styles.loginButton
//               : [styles.loginButton, styles.loginButtonActive]
//           }
//           disabled={!email || !password}>
//           <Text style={styles.loginButtonText}>로그인</Text>
//         </Pressable>
//         <Pressable>
//           <Text style={styles.signUpButton}>회원가입</Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   loginButton: {
//     backgroundColor: 'gray',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 5,
//     marginBottom: 10,
//     width: 150,
//     alignItems: 'center',
//   },
//   loginButtonActive: {backgroundColor: 'green'},

//   loginButtonText: {},
//   inputBox: {
//     borderColor: 'black',
//     backgroundColor: 'white',
//     borderWidth: 0.5,
//     width: 400,
//     margin: 10,
//   },

//   signUpButton: {
//     textAlign: 'center',
//   },
//   page: {
//     alignItems: 'center',
//   },
// });

// export default SignIn;
