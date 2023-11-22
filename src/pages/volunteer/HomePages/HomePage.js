import React, { useEffect, useState } from "react";
import {View,Text,StyleSheet, Image,ScrollView, Dimensions,TouchableOpacity,} from 'react-native';
import { Card,Title,} from "react-native-paper";
import {SafeAreaView} from 'react-native-safe-area-context'
import { useDispatch,useSelector } from "react-redux";
import { connect } from 'react-redux';

// impoort workshop redux action
import { worshopSelect } from "../../../redux/Actions";

const HomePage =({navigation})=>{

const [event , setEvent] = useState([]);
// useEffect for fetching all events list in the screen
   useEffect(()=>{
      const eventList =[
         "Google",
         "IBm",
         "Quest",
         "Techathalon",
         "Reception",
         "Quest",
         
      ]
   setEvent(eventList);
   },[])

//   const state = useSelector((state)=>state);
//   const username = state.auth.user?.username;
// const username = useSelector((state) => state.auth.user);
const state = useSelector((state) => state);
const username = state.auth.username;
console.log("hhiii,",username); 
// calculate the widthe of each card based on the 
const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 40) / 2;

const dispatch = useDispatch();

// navigation to scan
const handleNavigation=(workshop)=>{
   dispatch(worshopSelect(workshop))
   navigation.navigate("bottomTab");
}

// navigation To profile
const navigationToProfile=()=>{
   navigation.navigate("Profile");
}

   return(
    <SafeAreaView style={styles.container}>
      <View style={styles.AppBarView}>
         <Text style={styles.nameText}> Hello, {username} </Text>
         <TouchableOpacity style={styles.profileImageView} onPress={navigationToProfile}>
               <Image style={styles.profileImage} source={(require('./../../../images/icon2.png'))} />
               <Text style={styles.profileName}>Vimal</Text>
         </TouchableOpacity>
      </View>
      <View style={styles.viewCardBox}>
         <Text style={styles.eventSelectText}>Select Event</Text>
         <ScrollView contentContainerStyle={styles.cardView}>
            {event.map((eventName,index)=>(
               <View key={index} style={styles.cardContainer}>
                  <TouchableOpacity onPress={()=>{handleNavigation(eventName)}}>
                     <Card key={index} style={[styles.cardStyle ,{width:cardWidth -20 , height:cardWidth}]}>
                        <Card.Content >
                           <Card.Cover style={styles.eventImage} source={require('./../../../images/google.jpeg')} />
                        
                        </Card.Content>
                        <Card.Content style={styles.eventNameView}> 
                           <Title style={{ fontWeight:'300', fontSize: eventName.length > 6 ? 16 : 16 ,letterSpacing:0.32 , paddingBottom:10}} numberOfLines ={2} ellipsizeMode="tail">{eventName}</Title> 
                        </Card.Content>
                     </Card>
                  </TouchableOpacity>
               </View>
            ))}
               
         </ScrollView>
      </View>
    </SafeAreaView>
   )
}

export default HomePage;

const styles = StyleSheet.create({
   container:{ //outer container
      flex:1,
      backgroundColor:'#012E41',
   },
AppBarView:{ 
  justifyContent:'space-between',
  flexDirection:'row'
},
nameText:{
   color:'#fff',
   fontSize:20,
   paddingTop:50,
   paddingLeft:125,
   fontWeight:'300',
   alignSelf:'center'
},
profileImageView:{
   paddingTop:25,
   paddingRight:20,
   alignItems:'flex-end'
},
profileImage:{
   height:44,
   width:44,
   flexShrink:0,
},
profileName:{
   color:'#ffff',
   fontSize:15,
   fontStyle:'normal',
   fontWeight:'100',
},
cardView:{
   alignItems:'center',
},
eventSelectText:{
   alignSelf:'center',
   fontSize:30,
   color:'#ffff'

},
viewCardBox:{
   justifyContent:'center',
   paddingRight:10,
},
cardView:{
   flexDirection:'row',
   justifyContent:'space-between',
   flexWrap:'wrap',
   margin:5,
   paddingBottom:120,
},
cardContainer: {
   width: '50%', // Adjust the width to create a gap between cards
   
 },
 cardStyle:{
   alignItems:'center',
   margin:10,
   flexShrink:0,
   borderRadius:35,
   backgroundColor:'#fff',
   
 },
 eventImage:{
   height:80,
   width:80,
   margin:10
 },
 eventNameView:{
   alignSelf:'center',
   alignItems:'center',
   paddingBottom:10,
 },
 eventNameText:{
  
 }

})