import React, { useEffect, useState } from "react";
import {View,Text,StyleSheet, Image,ScrollView, Dimensions,TouchableOpacity,} from 'react-native';
import { Card,Title,} from "react-native-paper";
import {SafeAreaView} from 'react-native-safe-area-context'
import { useDispatch,useSelector } from "react-redux";
import { connect } from 'react-redux';


// impoort workshop redux action
import { worshopSelect } from "../../../redux/Actions";
import { workshopDataFetch } from "../../../SQLDatabaseConnection/FetchDataFromTable";

const HomePage =({navigation})=>{

const [event , setEvent] = useState([]);
// useEffect for fetching all events list in the screen
   useEffect(()=>{
     workshopData();
   
   },[])

   const workshopData = async () => {
      try {
          const workshop = await workshopDataFetch();
         //  console.log("Workshop title:", workshop);
          workshop.forEach( element => {
            element.title = capitalizeWord(element.title);
            element.icon =baseToUrI(element.icon);
           
             
          });
          console.log("icon daataaa",workshop.icon);
          setEvent(workshop);
      } catch (error) {
          console.error("Error fetching workshop data:", error);
      }
  };


// capitalise the first letter
  function capitalizeWord(word) {
   // Check if the input is a valid string
   if (typeof word !== 'string') {
     return 'Invalid input';
   }
 
   // Capitalize the first letter and concatenate with the rest of the word
   return word.charAt(0).toUpperCase() + word.slice(1);
 }
  
const baseToUrI=(data)=>{
   return `data:image/png;base64,${data}`;
}

const state = useSelector((state) => state);
const username = state.auth.token;
console.log("hhiii,",username); 
// calculate the widthe of each card based on the 
const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 40) / 2;

const dispatch = useDispatch();

// navigation to scan
const handleNavigation=async(workshop)=>{
   const workshopName = await reverseCapitalise(workshop)
   await dispatch(worshopSelect(workshopName))
  await navigation.navigate("bottomTab");
}

// workshop name capitalise to normal
function reverseCapitalise(word) {
   return word.charAt(0).toLowerCase() + word.slice(1);
 }

// navigation To profile
const navigationToProfile=()=>{
   navigation.navigate("Profile");
}

   return(
    <SafeAreaView style={styles.container}>
      <View style={styles.AppBarView}>
         <Text style={styles.nameText}> Hello,  </Text>
         <TouchableOpacity style={styles.profileImageView} onPress={navigationToProfile}>
               <Image style={styles.profileImage} source={(require('./../../../images/icon2.png'))} />
               <Text style={styles.profileName}>Vimal</Text>
         </TouchableOpacity>
      </View>
      <View style={styles.viewCardBox}>
         <Text style={styles.eventSelectText}>Select Event</Text>
         <ScrollView contentContainerStyle={styles.cardView}>
            {event.map((workshop,index)=>(
               <View key={index} style={styles.cardContainer}>
                  <TouchableOpacity onPress={()=>{handleNavigation(workshop.title)}}>
                     <Card key={index} style={[styles.cardStyle ,{width:cardWidth -20 , height:cardWidth}]}>
                           <Card.Content >
                          <Image style={styles.eventImage} source={{uri:''}} />
                        </Card.Content>
                        <Card.Content style={styles.eventNameView}> 
                           <Title style={{ fontWeight:'300', fontSize: workshop.title.length > 6 ? 16 : 16 ,letterSpacing:0.32 , paddingBottom:10}} numberOfLines ={2} ellipsizeMode="tail">{workshop.title}</Title> 
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