import React, { useEffect, useState } from "react";
import { View,Text,StyleSheet ,Image} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { EvilIcons,Entypo,AntDesign } from '@expo/vector-icons'; 
import { loadAllEventData } from "../../../API_Communication/Load_data";
const ChooseEvent=()=>{
    const [selected,setSelected] = useState('');
    const [eventList,setEventList] = useState([])

    useEffect(()=>{
        Load_Event_Data();
    },[])
    const data = [
        {key:'1', value:'Mobiles', disabled:true},
        {key:'2', value:'Appliances'},
        {key:'3', value:'Cameras'},
        {key:'4', value:'Computers', disabled:true},
        {key:'5', value:'Vegetables'},
        {key:'6', value:'Diary Products'},
        {key:'7', value:'Drinks'},
    ]

    const Load_Event_Data=async()=>{
        const eventListData = await loadAllEventData();
        console.log(eventListData);
        const transformedData = eventListData.map(event => ({
            key: event._id, // Assuming _id is the unique identifier
            value: event.title,
            disabled: false, // You may adjust this based on your logic
          }));
        setEventList(transformedData);

    }

    return(
        <View style={styles.container} >
            <View style={styles.image_View}>
                <Image style={styles.image_style} source={require('../../../images/LOGO_ICTAK-ENG-ALT-White-Text.png')} />
            </View>
            <View style={styles.dropDownListContainer}>
                <Text style={styles.textTop}>Choose the Event</Text>
                <SelectList 
                    setSelected={(val) => setSelected(val)} 
                    data={eventList} 
                    save="value"
                   searchicon={<EvilIcons name="search" size={24} color="white" />}
                   inputStyles={{color:'#fff'}}
                    boxStyles={{borderWidth:1,borderColor:'#fff'}}
                    dropdownTextStyles={{color:'#ffff'}}
                    closeicon={<Entypo name="cross" size={24} color="white" />}
                    arrowicon={<AntDesign name="down" size={24} color="white" />}
                    searchPlaceholder={null}
                    // search={false} 
                    
                />
            </View>
           
        </View>
    )
}

export default ChooseEvent;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#012E41',
    //    justifyContent:'space-evenly'
    },
    image_View :{
        justifyContent:'center',
        alignSelf:'center',
        flex:0.4
    },
    image_style:{
        height:80,
        width:250
        
    },
    dropDownListContainer:{
        flex:0.6,
        alignSelf:'center',
        width:'100%',
        padding:10
    },

    textTop:{
        color:'#fff',
        alignSelf:'flex-start',
        paddingBottom:6
    }
})