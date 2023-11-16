import React from "react";
import { View , Text,StyleSheet ,TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-paper";
const Input_data=({navigation})=>{

    const handleCheckTheId=()=>{
        navigation.navigate("singleUserVerify");
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.box_container}>
                <Text style={{color:'#fff'}}>Id / Mobile Number /email id </Text>
                <TextInput 
                    style={styles.styleInputText}
                //  placeholder="Id or Mobile Number"
                />

                <Button textColor="#000" 
                style={styles.buttonCheck} mode="contained" onPress={handleCheckTheId}>Check</Button>

            </View>

        </SafeAreaView>
    )
}

export default Input_data;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#012E41',
        flex:1,
        justifyContent:'center'
    },
    box_container:{
        backgroundColor:'#012E41',
        
        alignSelf:'center',
        borderRadius:15,
        height:'40%',
        width:'100%',
        alignItems:'flex-start',
        flexDirection:'column',
        marginLeft:20
    },
    styleInputText:{
        borderColor: "#ffff",
        borderBottomWidth: 1,
        height: 40,
        width: "85%",
        backgroundColor: "#012E41", // Set the background color to the container color
        color: "#ffff",
    },
    buttonCheck:{
        alignSelf:'center',
        bottom:6,
        width:'30%',
        backgroundColor:'#ffff',
        position:'absolute',
    }

})