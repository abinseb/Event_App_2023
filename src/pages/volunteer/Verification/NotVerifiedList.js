import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet,Text,Image ,ScrollView , Animated} from "react-native";
import { Card,Checkbox } from "react-native-paper";
import { List_userbasedOn_group } from "../../../API_Communication/Load_data";
import { useSelector } from "react-redux";

const NotVerifiedToVerify=({route})=>{

    // group id
const {groupid} = route.params;
// workshopname from redux
const workshopname = useSelector((state)=>state.workshop.workshopName);
  
    // userlist
    const [userList,setUserList] = useState([]);
    const [isChecked, setIsChecked] = useState([]);
    const slideAnimationlist =userList.map(() => new Animated.Value(0));
    

    useEffect(()=>{
        listOfUser_inGroup();
        
    },[])

    const listOfUser_inGroup=async()=>{
        const userData = await List_userbasedOn_group(groupid,workshopname);
        console.log("list the user___________",userData);
        setUserList(userData);
        setIsChecked(userData.map(() => false)); 
        
    }

    
    const handleCheckboxPressed =async(id, index) => {
       
    console.log("iddd",id);
      };
    
    
    return(
        <SafeAreaView style={styles.container}> 
            <View style={styles.innerBox}>
                <View style={styles.TittleView}>
                    <Text style={styles.tittleText}>College of Engineering vadakara </Text>
                </View>
                
                {/* cards are inside the scroll view*/}
                <ScrollView contentContainerStyle={styles.cardView}  >
                {userList.map((value,index)=>(
                    <Animated.View
                    style={{
                        transform:[
                            {
                                translateX:slideAnimationlist[index].interpolate({
                                    inputRange:[0,1],
                                    outputRange:[0,500],
                                }),

                            }
                        ],
                        opacity:slideAnimationlist[index].interpolate({
                                inputRange:[0,1],
                                outputRange:[1,0],
                        }),
                    }}
                    >
                        <Card style={styles.cardStyle} key={index}>
                            <Card.Content style={styles.cardContentStyle}>
                                <Image style={styles.imageStyle} source={require('../../../images/user2.png')}></Image>
                                <Text style={styles.nameText}>{value.name}</Text>
                                <View style={styles.textView}>
                                    <Text style={styles.txt1}> {value.email}</Text>
                                    <Text style={styles.txt1}> {value.mobile}</Text>
                                    <Text style={styles.workshopTxt}>{workshopname}</Text>
                                </View>
                                <View style={styles.viewCheckBox}>
                                    <Checkbox status={isChecked[value.name] ? 'checked' : 'unchecked'} onPress={()=>{handleCheckboxPressed(value._id,index)}} color="#2e8b57" />
                                </View>
                            </Card.Content>
                        </Card>
                    </Animated.View>
                    
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
        height:110,
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