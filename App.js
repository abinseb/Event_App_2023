import React, { useEffect } from "react";
import MyStack from "./src/navigation/StackNavigation";
import { Provider } from "react-redux";
import store from "./src/redux";
import { Create_Event_Data_Table, tableList,Create_Workshops_Table } from "./src/SQLDatabaseConnection/Create_Table";
import { event_Data_Load, user_data_load, workshop_data_load } from "./src/API_Communication/Load_data";
import { insertEventTable, insertWorkshopTable } from "./src/SQLDatabaseConnection/Insert_Table";


export default function App() {
  // initial rendering
useEffect(()=>{
  loadDataFromServerAndInsert();
  //insertEventTable();
  // event_Data_Load();
  // user_data_load();
  // Create_Event_Data_Table();
  // Create_Workshops_Table();
  // tableList();

},[])
const loadDataFromServerAndInsert=async()=>{
 try{
  // await Create_Event_Data_Table();
  // await insertEventTable();
  await Create_Workshops_Table();
  // await insertWorkshopTable();
  await workshop_data_load();
 }
 catch(err){
  console.log(err);
 }
}
  return (
  // <StackNavigation />
  // <Demo/>
<Provider store={store}>
<MyStack></MyStack>
</Provider>

  );
}


