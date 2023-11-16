import React, { useState } from "react";
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import BarCodeScan from "../../../components/BarCodeScan";
import { FontAwesome5 } from '@expo/vector-icons';
const ScanQR=({navigation})=>{
    const [scanner,setScanner]= useState(false)

    const handleQRCodeScan=()=>{
        setScanner(true);
    }

    const handleBackNavigation=()=>{
        navigation.goBack();
    }
    const navigationToVerify=()=>{
        navigation.navigate("Input Data");
    }
    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={handleBackNavigation} style={styles.backNavigationTouchable}>
            <View style={styles.backNavigationView}>
                
                    <FontAwesome5 name="less-than" size={16} color="black" /></View>
                </TouchableOpacity>
               
            {scanner ==true?
            <BarCodeScan />  //barcode scanning 
             :
            <View style={styles.buttonViewBox}>
                <TouchableOpacity onPress={handleQRCodeScan}>
                    <View style={styles.innerButton}>
                        <Text style={styles.TextStyle}>Scan</Text>
                    </View>
                </TouchableOpacity>
            </View> 
            }
            <View style={styles.textView}>
                <Text style={styles.txt1}>If QR won't Work?</Text>
                <TouchableOpacity onPress={navigationToVerify}>
                    <Text style={styles.txt2}>Click</Text>
                </TouchableOpacity>
               

            </View>
        </SafeAreaView>
    )
}

export default ScanQR;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#012E41',
        flex:1,
        justifyContent:"center"
    },
    buttonViewBox:{
        backgroundColor:'#44667B',
        height:280,
        width:280,
        alignSelf:'center',
        justifyContent:'center',
        borderRadius:150,
        alignItems:'center',

    },
    innerButton:{
        backgroundColor:'#6c95A7',
        height:230,
        width:230,
        borderRadius:150,
        justifyContent:'center',
        alignItems:'center'
    },
    TextStyle:{
        color:'#FFF',
        fontSize:26,
        fontWeight:'500'
    },
    textView:{
        alignSelf:'center',
        bottom:0,
        position:'absolute',
        flexDirection:'row',
        paddingBottom:20
    },
    txt1:{
        color:'#FFF',
        fontSize:16,
        fontWeight:'500'
    },
    txt2:{
        color:'#FFF',
        fontSize:16,
        fontWeight:'600',
        paddingLeft:4
    },
    backNavigationView:{
       
        height:40,
        width:40,
        backgroundColor:'#ffff',
        borderRadius:22,
        // margin:10,
        // marginTop:40,
        alignItems:'center',
        justifyContent:'center',

    },
    backNavigationTouchable:{
        top:0,
        position:'absolute',
        marginTop:40,
        margin:10,
    }


})