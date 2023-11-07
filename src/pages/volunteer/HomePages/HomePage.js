import React, { useEffect, useState } from "react";
import {View,Text,StyleSheet, Image,ScrollView, Dimensions} from 'react-native';
import { Card,Title,} from "react-native-paper";
import {SafeAreaView} from 'react-native-safe-area-context'


const HomePage =()=>{

const [event , setEvent] = useState([]);
// useEffect for fetching all events list in the screen
   useEffect(()=>{
      const eventList =[
         "Google",
         "IBm",
         "Quest",
         "Techathalon",
         "Reception"
      ]
   setEvent(eventList);
   },[])

// calculate the widthe of each card based on the 
const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 40) / 2;
   return(
    <SafeAreaView style={styles.container}>
      <View style={styles.AppBarView}>
         <Text style={styles.nameText}> Hello, Joseph T</Text>
         <View style={styles.profileImageView}>
               <Image style={styles.profileImage} source={(require('./../../../images/icon2.png'))} />
               <Text style={styles.profileName}>Joseph T</Text>
         </View>
      </View>
      <View style={styles.viewCardBox}>
         <ScrollView contentContainerStyle={styles.cardView}>
            {event.map((eventName,index)=>(
               <View key={index} style={styles.cardContainer}>
                  <Card key={index} style={[styles.cardStyle ,{width:cardWidth , height:cardWidth+30}]}>
                     <Card.Content >
                        <Card.Cover style={styles.eventImage} source={require('./../../../images/linkedin.jpeg')} />
                       
                     </Card.Content>
                     <Card.Content> 
                          <Title>{eventName}</Title> 
                     </Card.Content>
                  </Card>
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
   paddingTop:70,
   paddingLeft:65,
   fontWeight:'300'
},
profileImageView:{
   paddingTop:35,
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
viewCardBox:{
   justifyContent:'space-between',
},
cardView:{
   flexDirection:'row',
   justifyContent:'space-between',
   flexWrap:'wrap',
   margin:5,
},
cardContainer: {
   width: '48%', // Adjust the width to create a gap between cards
   marginBottom: 10,
 },
 cardStyle:{
   alignItems:'center',
   height:186,
   width:157,
   margin:10,
   flexShrink:0,
   borderRadius:45,
   backgroundColor:'#fff'
 },
 eventImage:{
   height:130,
   width:130,
   margin:10
 }

})