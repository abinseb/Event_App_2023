import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-paper";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Login = ({ navigation }) => {
  const authenticateEntry = () => {
    navigation.navigate('home');
  };

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={styles.container}>
     
          <View style={styles.imageView}>
            <Image style={styles.imageStyle} source={require('../../../images/ict.png')} />
          </View>
          <ScrollView contentContainerStyle={styles.scrollViewContainer} keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView style={styles.keyboardAvoidingContainer} behavior={Platform.OS === 'ios' ? 'padding' : null} keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -200}>
          {/* image view container */}
          <View style={styles.loginBox}>
            {/* username view */}
            <View style={styles.authDataInputUsername}>
              <Text style={styles.TxtInput}>User Name:</Text>
              <TextInput
                style={styles.userNameInput}
                placeholder="Enter UserName"
                placeholderTextColor='#aaa'
              />
            </View>
            {/* password view box */}
            <View style={styles.authDataInputPasswordView}>
              <Text style={styles.TxtInput}>Password:</Text>
              {/* password container for password input icon visibility */}
              <View style={styles.passwordContainer}>
                <TextInput
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                  style={styles.userPassword}
                  placeholder="Enter Password"
                  placeholderTextColor="#aaa"
                />
                <MaterialCommunityIcons
                  name={showPassword ? 'eye-off' : 'eye'}
                  size={24}
                  color="#aaa"
                  style={styles.icon}
                  onPress={toggleShowPassword}
                />
              </View>
              <TouchableOpacity><Text style={styles.forgotpasswordTxt}>Forgot Password?</Text></TouchableOpacity>
            </View>
            <View style={styles.buttonView}>
              <Button textColor="black" mode="contained" style={styles.btn} onPress={authenticateEntry} > Login</Button>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#012E41',
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  keyboardAvoidingContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  imageView: {
    alignSelf: 'center',
    height: '40%',
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#012E41',
  },
  imageStyle: {
    alignSelf: 'center',
    height:200,
    width:200
    
  },
  loginBox: {
    alignSelf: 'center',
    backgroundColor: '#012E41',
    height: '60%',
    width: '95%',
    alignItems: 'flex-start',
  },
  authDataInputUsername: {
    flexDirection: 'column',
    width: '100%',
    paddingBottom: '15%',
  },
  userNameInput: {
    borderColor: "#ffffff",
    borderBottomWidth: 1,
    height: 40,
    width: '95%',
    backgroundColor: '#012E41',
    color: '#ffffff',
  },
  authDataInputPasswordView: {
    flexDirection: 'column',
    width: '100%',
    paddingTop: 10,
    paddingBottom: '10%',
  },
  TxtInput: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '300',
  },
  forgotpasswordTxt: {
    color: '#1e90ff',
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 10,
  },
  buttonView: {
    alignSelf: 'center',
    width: '100%',
    alignItems: 'center',
    bottom: 20,
    position: 'absolute',
    paddingTop: 10,
  },
  btn: {
    width: '60%',
    backgroundColor: '#ffffff',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
  },
  icon: {
    position: 'absolute',
    right: 8,
  },
  userPassword: {
    borderColor: "#ffffff",
    borderBottomWidth: 1,
    height: 40,
    width: '95%',
    backgroundColor: '#012E41',
    color: '#ffffff',
  },
});

export default Login;
