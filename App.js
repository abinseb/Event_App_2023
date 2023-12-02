import React, { useEffect } from "react";
import MyStack from "./src/navigation/StackNavigation";
import { Provider } from "react-redux";
import store from "./src/redux";
import { Create_Event_Data_Table, tableList,Create_Workshops_Table, Create_user_table, create_Offline_table, create__group_table } from "./src/SQLDatabaseConnection/Create_Table";
import { Data_for_Update_UserTable, event_Data_Load, user_data_load, workshop_data_load } from "./src/API_Communication/Load_data";
import { insertEventTable, insertWorkshopTable, insert_To_UserTable, insert_group_table } from "./src/SQLDatabaseConnection/Insert_Table";


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
   await Create_Event_Data_Table();
   await insertEventTable();
  await Create_Workshops_Table();
   await insertWorkshopTable();
  await Create_user_table();
  await insert_To_UserTable();
  await Data_for_Update_UserTable();
  await create_Offline_table();
  await create__group_table();
  await insert_group_table();
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


