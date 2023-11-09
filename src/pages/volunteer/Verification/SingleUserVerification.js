import React from "react";
import { View, StyleSheet,Image,Text,TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons,Ionicons,FontAwesome5 } from '@expo/vector-icons';
import { Button } from "react-native-paper";
const SingleUserVerification = ({navigation}) => {
  const navigationToScan=()=>{
    navigation.navigate("ScanQRCode");
  }
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.backNavigationView}>
          <TouchableOpacity onPress={navigationToScan}>
            <FontAwesome5 name="less-than" size={20} color="black" />
          </TouchableOpacity>
               
        </View>
        
        <View style={styles.innerBox}>
            {/* Content for innerBox */}
        </View>
        <View style={styles.innerBox2}>
            {/* Content for innerBox2 */}
        </View>
        <View style={styles.profileBox}>
            <View style={styles.nameTextTopView}>
                <Text style={styles.nameText}>Joseph Thomas</Text>
                <Text style={styles.institusionText}>College of Engineering Vadakara</Text>
            </View> 
            <View style={styles.tittleDetails}>
                <Text style={styles.TittleText}>Participant Details</Text>
            </View>
            <View style={styles.otherDetailsView}>
                <View style={styles.iconDataView}>
                    <MaterialCommunityIcons name="email-outline" size={20} color="black" />
                    <Text style={styles.dataStyle}>mailid123@gmail.com</Text>
                </View>
                <View style={styles.iconDataView}>
                <Ionicons name="call-outline" size={20} color="black" />
                    <Text style={styles.dataStyle}>9074515643</Text>
                </View>
                
            </View>
            <View style={styles.buttonView}>
                <Button mode="contained" style={styles.customButton}>Verify</Button>

            </View>
          
        </View>
        <View style={styles.imageView}>
            <Image style={styles.imageStyle} source={require('./../../../images/icon2.png')} />
        </View>
    </SafeAreaView>
  );
}

export default SingleUserVerification;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#012E41',
    justifyContent:'center',
    flex: 1,
  },
  innerBox: {
    backgroundColor: '#fff',
    height:'65%',
    width: '100%',
    borderLeftWidth: 70,
    borderTopLeftRadius: 400,
    position:'absolute',
    bottom:0,
    right:0,
    borderLeftColor: 'transparent',

  },
  innerBox2: {
    backgroundColor: '#fff',
    height: '40%',
    width: '20%', // Adjust the width as needed
    position: 'absolute', // Absolute positioning
    bottom: 0, // Align at the bottom
    left: 0, // Align at the left
    borderTopRightRadius:80,
  },
  profileBox:{
    backgroundColor:'#fff',
    height:'70%',
    width:'85%',
    alignSelf:'center',
    borderRadius:30,
    // borderWidth:1,
    elevation:5
  },
  imageView:{
    position:'absolute',
    top:'11%',
    alignSelf:'center',
  },
  imageStyle:{ margin:20,
    height:90,
    width:90
  },
  nameTextTopView:{
    alignItems:'center',
    paddingTop:'18%'

  },
  nameText:{
    fontWeight:'600',
    fontSize:22,
    
  },
  institusionText:{
    color:'#969595',
    fontSize:13,
    fontWeight:'600',
    paddingTop:10,
  },
  tittleDetails:{
    alignItems:'center',
    paddingTop:'20%'
  },
  
  otherDetailsView:{
    alignItems:'flex-start',
    paddingTop:20,
   
  },
  TittleText:{
    fontSize:16,
    fontWeight:'600'
  },
  iconDataView:{
    paddingLeft:'17%',
    flexDirection:'row',
    alignItems:'center',
    margin:10
  },
  dataStyle:{
    fontSize:17,
    fontWeight:'300',
    paddingLeft:10
  },
  buttonView:{
   alignSelf:'center',
   position:'absolute',
   bottom:100,
  },
  customButton:{
    width:170,
    backgroundColor:'#012E41'
  },
  backNavigationView:{
    top:0,
    position:'absolute',
    height:40,
    width:40,
    backgroundColor:'#ffff',
    borderRadius:22,
    margin:10,
    marginTop:40,
    alignItems:'center',
    justifyContent:'center',

}
  
});
