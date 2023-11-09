import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet } from "react-native";
const NotVerifiedToVerify=()=>{
    return(
        <SafeAreaView style={styles.container}> 
            <View style={styles.innerBox}>

            </View>
        </SafeAreaView>
    )
}

export default NotVerifiedToVerify;

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#012E41",
        flex:1,
        justifyContent:'center',
    },
    innerBox:{
        alignSelf:'center',
        backgroundColor:'#BAD0DE',
        height:'97%',
        width:'95%',
        position:"absolute",
        bottom:0,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,

    }
})