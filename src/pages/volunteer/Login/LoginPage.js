import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ToastAndroid, Alert, BackHandler } from 'react-native';
import { Button } from "react-native-paper";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// connection
import { Check_Connection } from "../../../API_Communication/Check_connection";
import { eventDataFetch, user_Table_data } from "../../../SQLDatabaseConnection/FetchDataFromTable";
import { authenticate_Volunteer } from "../../../API_Communication/Athentication";
import { getUserData, saveUserData } from "../../../AsyncStorage/StoreUserCredentials";

import { useNavigation } from "@react-navigation/native";

const Login = ({ navigation }) => {
    const [event, setEvent] = useState('');
    // render network status

//const navigation = useNavigation();

    // State variable to hold the password 
    const [password, setPassword] = useState('');

    // state variable to hold the username
    const [userName, setUserName] = useState('');

    // State variable to track password visibility 
    const [showPassword, setShowPassword] = useState(false);

    // Function to toggle the password visibility state 
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
 
    const [loginstate,setLoginState] = useState(null);

    useEffect(async() => {

        const {username,token} = await getUserData();
        if(token === null){
            NetworkConnection();
            EventData();
        }
        else{
            navigationToHome();
        }

    }, [event])

    // update user tabel


    const EventData = async () => {
        const eventName = await eventDataFetch();
        await console.log("eventname", eventName.title);
        setEvent(eventName.title);
    }
    // check network status
    const NetworkConnection = async () => {
        const network = await Check_Connection();
        console.log("nnnn", network);
        if (network === true) {
            // alert('You are Offline , Please Connect')
            showToastNotification();
        }
    }

    // show toast notification
    function showToastNotification() {
        ToastAndroid.show("You are Offline", ToastAndroid.SHORT);
    }
    // authenticate login
    const authenticateEntry = async () => {
        if (userName == '' && password == '') {
            showAuthenticationEmpty();
        }
        else {
            try {
                const authData = await authenticate_Volunteer(userName, password);
                // const user ={userName};
                console.log('authenticationData', authData)
                if (authData.status === true) {
                    await saveUserData(authData.name, authData.token);
                    await showAuthenticationTrue();
                    await navigationToHome();

                }
                else {
                    showAuthenticationFalse();
                    console.log("Authenticationjjjjjjjjjjjjjjjjjjjjjjjjjj failed");
                }

            }
            catch (errr) {
                console.log("Authentication failed", errr);
                // alert("Invalid user credentials");
                showAuthenticationFalse();
            }
        }

    }

    // navigation to home if authentication is true
    const navigationToHome = () => {
        navigation.replace('home');
    }

    // toast notification for login success
    function showAuthenticationTrue() {
        ToastAndroid.show("Login Success", ToastAndroid.SHORT);
    }
    // toast notification for authentication failure
    function showAuthenticationFalse() {
        ToastAndroid.show("Invalid credentials", ToastAndroid.SHORT);
    }
    // toast notification for if username and password is empty
    function showAuthenticationEmpty() {
        ToastAndroid.show("Please Enter a valid username and password", ToastAndroid.SHORT);
    }


    // avoid backnvigation
    const handleBacknavigation = () => {
        Alert.alert(
            "Exit App",
            "Do you want to exit?",
            [
                {
                    text: "No",
                    onPress: () => {
                        navigation.navigate("Login");
                    },
                    style: 'cancel'
                },
                {
                    text: "Yes",
                    onPress: () => {
                        BackHandler.exitApp();
                    }
                }
            ],
            { cancelable: false }
        );
        return true;
    };

    useEffect(() => {
        const backhandler = BackHandler.addEventListener(
            "hardwareBackPress",
            handleBacknavigation
        );
        return () => {
            backhandler.remove();
        }
    }, [navigation]);


    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>

            {/* image view container */}
            <View style={styles.imageView}>
                <Image style={styles.imageStyle} source={require('../../../images/ict.png')} />
                <Text style={{ fontSize: 25, color: '#fff' }}>{event}</Text>
            </View>

            <View style={styles.loginBox}>
                {/* username view */}
                <View style={styles.authDataInputUsername}>
                    <Text style={styles.TxtInput}>User Name:</Text>
                    <TextInput
                        style={styles.userNameInput}
                        value={userName}
                        placeholder="Email"
                        placeholderTextColor='#aaa'
                        onChangeText={(value) => {
                            setUserName(value);
                            console.log(`User Name changed,${value}`);
                        }}
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
                            onChangeText={(value) => {
                                setPassword(value);
                                console.log(`password,${password}`);
                            }}
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