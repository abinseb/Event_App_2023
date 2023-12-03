import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet, Text, Image, ScrollView, Animated } from "react-native";
import { Card, Checkbox } from "react-native-paper";
import { List_userbasedOn_group } from "../../../API_Communication/Load_data";
import { useSelector } from "react-redux";
import { userVerification } from "../../../API_Communication/Verification";
import { user_Table_data, user_data_basedON_group } from "../../../SQLDatabaseConnection/FetchDataFromTable";
import { userVerification_Offline } from "../../../SQLDatabaseConnection/Update_Table";
import { useReducer } from "react";
const NotVerifiedToVerify = ({ route }) => {
  // group id
  const { groupid,groupname } = route.params;
  // workshopname from redux
  const workshopname = useSelector((state) => state.workshop.workshopName);

  // userlist
  const [userList, setUserList] = useState([]);
  const [isChecked, setIsChecked] = useState([]);

  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
     listOfUser_inGroup();
    //user_Table_data();
  }, [refresh]);

  const listOfUser_inGroup = async () => {
    try {
      const userData = await List_userbasedOn_group(groupid, workshopname);
      setUserList(userData || []);
      setIsChecked(userData.map(() => false));
    } catch (error) {
      console.log("Error fetching user data:", error);
      const tableData = await user_data_basedON_group(groupid, workshopname);
      console.log("User data from table:", tableData);
       setUserList(tableData || []);
      setIsChecked(tableData.map(() => false));
    }
  };
  

  const handleCheckboxPressed = async (id, index) => {
    // Toggle checkbox state
    const updatedCheckedState =await [...isChecked];
    updatedCheckedState[index] =await !updatedCheckedState[index];
     const verification = await userVerification(id,workshopname);
     if(verification === true){
        await setIsChecked(updatedCheckedState);
        setRefresh(!refresh);
     }
     else{
      console.log("iidddd",id);
     await userVerification_Offline(id,workshopname);
      await setIsChecked(updatedCheckedState);
      setRefresh(!refresh);
     }
    
  };


 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerBox}>
        <View style={styles.TittleView}>
          <Text style={styles.tittleText}>{groupname} </Text>
        </View>
        <ScrollView contentContainerStyle={styles.cardView}>
          {userList.map((value, index) => (
            <Animated.View
              key={index}
              style={{
                transform: [
                  {
                    translateX: isChecked[index]
                      ? new Animated.Value(-500).interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, -500],
                        })
                      : 0,
                  },
                ],
                opacity: isChecked[index]
                  ? new Animated.Value(1).interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 0],
                    })
                  : 1,
              }}
            >
              <Card style={styles.cardStyle}>
                <Card.Content style={styles.cardContentStyle}>
                  <Image style={styles.imageStyle} source={require("../../../images/user2.png")} />
                  <Text style={styles.nameText}>{value.name}</Text>
                  <View style={styles.textView}>
                    <Text style={styles.txt1}> {value.email}</Text>
                    <Text style={styles.txt1}> {value.mobile}</Text>
                    <Text style={styles.workshopTxt}>{workshopname}</Text>
                  </View>
                  <View style={styles.viewCheckBox}>
                    <Checkbox
                      status={isChecked[index] ? "checked" : "unchecked"}
                      onPress={() => {
                        handleCheckboxPressed(value._id || value.id, index);
                      }}
                      color="#2e8b57"
                    />
                  </View>
                </Card.Content>
              </Card>
            </Animated.View>
          ))}
        </ScrollView>
        <View style={styles.buttonView}></View>
      </View>
    </SafeAreaView>
  );
};

export default NotVerifiedToVerify;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#012E41",
    flex: 1,
    justifyContent: "center",
  },
  innerBox: {
    alignSelf: "center",
    backgroundColor: "#BAD0DE",
    height: "97%",
    width: "95%",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  TittleView: {
    margin: "10%",
    alignSelf: "center",
  },
  tittleText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#343F45",
  },
  cardView: {
    alignItems: "center",
    paddingBottom: "30%",
  },
  cardStyle: {
    height: 110,
    width: "95%",
    backgroundColor: "#ffffff",
    marginBottom: 10,
  },
  cardContentStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  imageStyle: {
    height: 60,
    width: 60,
  },
  nameText: {
    margin: 10,
    marginLeft: "32%",
    top: 0,
    position: "absolute",
    fontSize: 16,
    fontWeight: "500",
  },
  textView: {
    alignItems: "flex-start",
    paddingTop: "5%",
    marginLeft: "5%",
    width: "65%",
  },
  txt1: {
    color: "",
  },
  workshopTxt: {
    color: "#0475FA",
    alignSelf: "flex-start",
  },
  viewCheckBox: {
    alignSelf: "center",
  },
});
