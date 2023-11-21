import React, { useEffect } from "react";
import MyStack from "./src/navigation/StackNavigation";
import { Provider } from "react-redux";
import store from "./src/redux";
import { Create_Event_Data_Table, tableList,Create_Workshops_Table } from "./src/SQLDatabaseConnection/Create_Table";



export default function App() {
  // initial rendering
useEffect(()=>{
  Create_Event_Data_Table();
  Create_Workshops_Table();
  tableList();
},[])
  return (
  // <StackNavigation />
  // <Demo/>
<Provider store={store}>
<MyStack></MyStack>
</Provider>

  );
}


