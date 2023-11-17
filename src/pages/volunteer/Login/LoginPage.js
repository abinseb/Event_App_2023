import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-paper";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const Login = ({ navigation }) => {

    const authenticateEntry = () => {
        navigation.navigate('home');
    }

    // State variable to hold the password 
    const [password, setPassword] = useState('');

    // State variable to track password visibility 
    const [showPassword, setShowPassword] = useState(false);

    // Function to toggle the password visibility state 
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>

            {/* image view container */}
            <View style={styles.imageView}>
                <Image style={styles.imageStyle} source={require('../../../images/ict.png')} />
            </View>
            <View style={styles.loginBox}>
                {/* username view */}
                <View style={styles.authDataInputUsername}>
                    <Text style={styles.TxtInput}>User Name:</Text>
                    <TextInput
                        style={styles.userNameInput}
                        placeholder="Email"
                        placeholderTextColor='#aaa'
                    />
                </View>
                {/* password view box */}
                <View style={styles.authDataInputPasswordView}>
                    <Text style={styles.TxtInput}>Password:</Text>
                    {/* password container for password input icon visibility */}
                    <View style={styles.passwordContainer}>
                        <TextInput
                            // Set secureTextEntry prop to hide  
                            //password when showPassword is false 
                            secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={setPassword}
                            style={styles.userPassword}
                            placeholder="Password"
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


        </KeyboardAwareScrollView>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#012E41',
        flex: 1,
        justifyContent: 'space-between',


    },


    imageView: {
        alignSelf: 'center',
        height: '40%',
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#012E41'
    },
    imageStyle: {
        alignSelf: 'center',
        height: 150,
        width: 150
        // width:'40%'
    },
    loginBox: {
        alignSelf: 'center',
        backgroundColor: '#012E41',
        height: '60%',
        width: '95%',
        alignItems: 'flex-start',
        bottom: 0,
        position: 'absolute'

    },
    authDataInputUsername: {
        flexDirection: 'column',
        width: '100%',
        paddingBottom: '15%'

    },
    userNameInput: {
        borderColor: "#ffffff",
        borderBottomWidth: 1,
        height: 40,
        width: '95%',
        backgroundColor: '#012E41',
        color: '#ffffff'

    },
    authDataInputPasswordView: {
        flexDirection: 'column',
        width: '100%',
        paddingTop: 10,
        paddingBottom: '10%'
    },
    TxtInput: {
        color: '#ffffff',
        fontSize: 17,
        fontWeight: '300'
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
        // bottom: 20,
        // position: 'absolute',
        paddingTop: 10,
    },
    btn: {

        width: '60%',
        backgroundColor: '#ffffff'
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 'auto'
    },
    icon: {

        position: 'absolute',
        right: '10%'
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