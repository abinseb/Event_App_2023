import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView ,ToastAndroid} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-paper";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';
import { loginUser ,loginSuccess } from "../../../redux/Actions";
import {Data_for_Update_UserTable} from '../../../API_Communication/Load_data'
// connection
import { Check_Connection } from "../../../API_Communication/Check_connection";
import { eventDataFetch, user_Table_data } from "../../../SQLDatabaseConnection/FetchDataFromTable";
import { authenticate_Volunteer } from "../../../API_Communication/Athentication";


const Login = ({ navigation }) => {
const [event , setEvent]= useState('');
// render network status
    useEffect(()=>{
        NetworkConnection();
        EventData();
       
    },[])

    // update user tabel


const EventData=async()=>{
 const eventName= await eventDataFetch();
  await console.log("eventname",eventName.title);
  setEvent(eventName.title);
}
    // check network status
    const NetworkConnection=async()=>{
        const network = await Check_Connection();
       console.log("nnnn",network);
       if(network === true){
        // alert('You are Offline , Please Connect')
        showToastNotification();
       }
    }

    // show toast notification
    function showToastNotification(){
        ToastAndroid.show("You are Offline",ToastAndroid.SHORT);
    }
    // authenticate login
    const authenticateEntry =async () => {
        try{
            const authData = await authenticate_Volunteer(userName,password);
        // const user ={userName};
        console.log('authenticationData',authData)
            if(authData.status === true){
                await dispatch(loginSuccess(authData.userId,authData.token));
                await showAuthenticationTrue();
                await navigation.navigate('home');
            }
            else{
                showAuthenticationFalse();
                console.log("Authenticationjjjjjjjjjjjjjjjjjjjjjjjjjj failed");
            }
      
        }
        catch(errr){
            console.log("Authentication failed",errr);
            // alert("Invalid user credentials");
            showAuthenticationFalse();
        }
        
    }

    function showAuthenticationTrue(){
        ToastAndroid.show("Login Success",ToastAndroid.SHORT);
    }

    function showAuthenticationFalse(){
        ToastAndroid.show("Invalid credentials",ToastAndroid.SHORT);
    }

    // usedispatch for state updating
    const dispatch = useDispatch();

    // State variable to hold the password 
    const [password, setPassword] = useState('');

    // state variable to hold the username
    const [userName , setUserName] = useState('');

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
                <Text style={{fontSize:25,color:'#fff'}}>{event}</Text>
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
                        onChangeText={(value)=>{
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
                            onChangeText={(value)=>{
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