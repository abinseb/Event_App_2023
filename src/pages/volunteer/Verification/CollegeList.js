import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchableDropDown from 'react-native-searchable-dropdown';
const BulkVerification =()=>{

    var items = [
        {
          id: 1,
          name: 'JavaScript',
        },
        {
          id: 2,
          name: 'Java',
        },
        {
          id: 3,
          name: 'Ruby',
        },
        {
          id: 4,
          name: 'React Native',
        },
        {
          id: 5,
          name: 'PHP',
        },
        {
          id: 6,
          name: 'Python',
        },
        {
          id: 7,
          name: 'Go',
        },
        {
          id: 8,
          name: 'Swift',
        },
      ];


    return(
       <SafeAreaView style={styles.container}>
          <View style={styles.TopTextView}>
              <Text style={styles.TextStyle}>Select the Institusion from the List</Text>
          </View>
          {/* <View style={styles.viewSearchableDropDown}> */}
            <SearchableDropDown
              onTextChange={(text) => console.log(text)}
              // onItemSelect={}
              containerStyle={{ paddingTop: 50 }}
              textInputStyle={{
                  padding: 12,
                  borderWidth: 1,
                  borderColor: '#ccc',
                  backgroundColor: '#FAF7F6',
              }}
              itemStyle={{
                  padding: 10,
                  marginTop: 2,
                  backgroundColor: '#FAF9F8',
                  borderColor: '#bbb',
                  borderWidth: 1,
              }}
              itemTextStyle={{
                  color: '#222',
              }}
              itemsContainerStyle={{
                  maxHeight: '100%',
              }}
              items={items}
              defaultIndex={2}
              placeholder="Select a college"
              resetValue={false}
              underlineColorAndroid="transparent"
              />
          {/* </View> */}
       </SafeAreaView>
    )
}

export default BulkVerification;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#012E41',
        padding:10,
        justifyContent:'space-between'
    },
    TopTextView:{
      top:0,
      position:'absolute',
      paddingTop:50,
    alignSelf:'center'
    },
    TextStyle:{
      fontWeight:'300',
      fontSize:20,
      color:'#fff'
    },
    viewSearchableDropDown:{
      alignSelf:'center',
    
    }
})
