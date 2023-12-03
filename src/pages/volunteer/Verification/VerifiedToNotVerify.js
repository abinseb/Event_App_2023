import React, { useState, useRef, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity, Animated } from "react-native";
import { Card, Checkbox, Icon } from "react-native-paper";
import { useSelector } from "react-redux";
import { list_unverifiedUserData_basedOngroup } from "../../../API_Communication/Load_data";
import { Verified_user_data_basedON_group } from "../../../SQLDatabaseConnection/FetchDataFromTable";
import { unverify_user } from "../../../API_Communication/Verification";
import { unverification_Offline } from "../../../SQLDatabaseConnection/Update_Table";

const VerifiedToNotVerify = ({route}) => {


    // const animationToCard = (index) => {
    //     console.log(index);
    //     Animated.timing(slideAnimation[index], {
    //         toValue: 1,
    //         duration: 500, // Adjust the duration as needed
    //         useNativeDriver: true,
    //     }).start(() => {
    //         // Animation finished
    //         // onAnimationEnd();
    //     });
    // }

    
 // group id
 const { groupid,groupname } = route.params;
 // workshopname from redux
 const workshopname = useSelector((state) => state.workshop.workshopName);
 const [userdata,setUserData] = useState([]);

 const [refresh, setRefresh] = useState(false);

useEffect(()=>{

    verifiedUserData();
},[refresh])


const verifiedUserData=async()=>{
    try{
        const verifiedData = await list_unverifiedUserData_basedOngroup(groupid,workshopname);
    console.log("verified_data_______#####",verifiedData);
    setUserData(verifiedData);
    
    
    }
    catch(err){
        console.log("error",err);
        const verifiedTableData = await Verified_user_data_basedON_group(groupid,workshopname);
        console.log("verified")
        setUserData(verifiedTableData);
    }

}

// unverify the user data
const unverify_user_inGroup=async(userid)=>{
    try{
        const unverify = await unverify_user(userid,workshopname);
        console.log("unverify",unverify);
        if(unverify === true){
            setRefresh(!refresh);
        }
        else{
            await unverification_Offline(userid,workshopname);
            await setRefresh(!refresh);
        }
    }
    catch(err){
        console.log("unverifyyyyFailed",err);
    }
}



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerBox}>
                <View style={styles.TittleView}>
                    <Text style={styles.tittleText}>{groupname}</Text>
                </View>

                {/* cards are inside the scroll view*/}
                <ScrollView contentContainerStyle={styles.cardView}  >
                    {userdata.map((value, index) => (
                         
                            <Card style={styles.cardStyle} key={index}>
                                <Card.Content style={styles.cardContentStyle}>
                                    <Image style={styles.imageStyle} source={require('../../../images/user4.png')}></Image>
                                    <Text style={styles.nameText}>{value.name}</Text>
                                    <View style={styles.textView}>
                                        <Text style={styles.txt1}> {value.email}</Text>
                                        <Text style={styles.txt1}> {value.mobile}</Text>
                                        <Text style={styles.workshopTxt}>{workshopname}</Text>
                                        <Text style={styles.verifiedTxt}>Verified</Text>
                                    </View>
                                    <View style={styles.viewCheckBox}>
                                        <TouchableOpacity onPress={()=>{unverify_user_inGroup(value._id || value.id)}}>
                                            <Image source={require('../../../images/cross.jpg')} style={{ height: 17, width: 17 }} />
                                        </TouchableOpacity>
                                    </View>
                                </Card.Content>
                            </Card>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default VerifiedToNotVerify;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#012E41",
        flex: 1,
        justifyContent: 'center',
    },
    innerBox: {
        alignSelf: 'center',
        backgroundColor: '#BAD0DE',
        height: '97%',
        width: '95%',
        position: "absolute",
        bottom: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

    },
    TittleView: {
        margin: '10%',
        alignSelf: 'center',
    },
    tittleText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#343F45'
    },
    cardView: {

        alignItems: "center",
        // height:'100%',

        // backgroundColor:'#ffff'
    },
    cardStyle: {
        height: 130,
        width: '95%',
        backgroundColor: '#ffff',
        marginBottom: 10,

    },
    cardContentStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',

    },
    imageStyle: {
        height: 60,
        width: 60,
    },
    nameText: {
        margin: 10,
        marginLeft: '32%',
        top: 0,
        position: 'absolute',
        fontSize: 16,
        fontWeight: '500',
    },
    textView: {
        alignItems: 'flex-start',
        paddingTop: '5%',
        marginLeft: '5%',
        width: '65%'
    },
    txt1: {
        color: ''
    },
    workshopTxt: {
        color: '#0475FA',
        alignSelf: 'flex-start',
    },
    viewCheckBox: {
        alignSelf: 'center'
    },
    verifiedTxt: {
        color: '#2e8b57',
        alignSelf: 'center',
        fontSize: 14
    }

})