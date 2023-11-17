import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet,Text,Image ,ScrollView} from "react-native";
import { Card,Checkbox } from "react-native-paper";


const NotVerifiedToVerify=()=>{

    const listOfStudent =[
        {
            "name":"Amal Rajan",
            "email":"amalrajappan@gmail.com",
            'mobileNumber' :9076573863,
        },
        {
            "name":"Rahul CV",
            "email":"rahul@gmail.com",
            'mobileNumber' :9076573863,
        },
        {
            "name":"joseph T",
            "email":"josephpk@gmail.com",
            'mobileNumber' :9076573863,
        },
        {
            "name":"Anil Rajan",
            "email":"anilrajappan@gmail.com",
            'mobileNumber' :9076573863,
        },
        {
            "name":"Niranjan CK",
            "email":"niranjanck@gmail.com",
            'mobileNumber' :9076573863,
        },
        {
            "name":"adrishin",
            "email":"adrishinb@gmail.com",
            'mobileNumber' :9076573863,
        },
        {
            "name":"Vimal Prakash",
            "email":"vimalprakash@gmail.com",
            'mobileNumber' :9076573863,
        },
    ];

    // animations




    const [isChecked , setIsChecked ] = useState(listOfStudent.map(()=>false));
    const handleCheckboxPressed=(id)=>{
        const newCheckedState = [isChecked];
            newCheckedState[id] = !isChecked[id];

        console.log(id,newCheckedState);
        setIsChecked(newCheckedState);

    };
 
    

    return(
        <SafeAreaView style={styles.container}> 
            <View style={styles.innerBox}>
                <View style={styles.TittleView}>
                    <Text style={styles.tittleText}>College of Engineering vadakara </Text>
                </View>
                
                {/* cards are inside the scroll view*/}
                <ScrollView contentContainerStyle={styles.cardView}  >
                {listOfStudent.map((value,index)=>(
                    
                    <Card style={styles.cardStyle} key={index}>
                        <Card.Content style={styles.cardContentStyle}>
                            <Image style={styles.imageStyle} source={require('../../../images/user2.png')}></Image>
                            <Text style={styles.nameText}>{value.name}</Text>
                            <View style={styles.textView}>
                                <Text style={styles.txt1}> {value.email}</Text>
                                <Text style={styles.txt1}> {value.mobileNumber}</Text>
                                <Text style={styles.workshopTxt}>Google</Text>
                            </View>
                            <View style={styles.viewCheckBox}>
                                <Checkbox status={isChecked[value.name] ? 'checked' : 'unchecked'} onPress={()=>{handleCheckboxPressed(value.name)}} color="#2e8b57" />
                            </View>
                        </Card.Content>
                    </Card>
                    
                    ))}
                    </ScrollView>
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

    },
    TittleView:{
        margin:'10%',
        alignSelf:'center',
    },
    tittleText:{
        fontSize:18,
        fontWeight:'600',
        color:'#343F45'
    },
    cardView:{
       
        alignItems:"center",
        // height:'100%',
        paddingBottom:'30%',
        // backgroundColor:'#ffff'
    },
    cardStyle:{
        height:'15%',
        width:'95%',
        backgroundColor:'#ffffff',
        marginBottom:10,
       
    },
    cardContentStyle:{
        flexDirection:'row',
        justifyContent:'flex-start',
    },
    imageStyle:{
        height:60,
        width:60,
    },
    nameText:{
        margin:10,
        marginLeft:'32%',
        top:0,
        position:'absolute',
        fontSize:16,
        fontWeight:'500',   
    },
    textView:{
        alignItems:'flex-start',
        paddingTop:'5%',
        marginLeft:'5%', 
        width:'65%'
    },
    txt1:{
        color:''
    },
    workshopTxt:{
        color:'#0475FA',
        alignSelf:'flex-start',
    },
    viewCheckBox:{
        alignSelf:'center'
    }

})