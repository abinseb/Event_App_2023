import axios from "axios";
import { URL_Connection, eventID } from "../connection/Url_connection";
import { insertWorkshopTable, insert_To_UserTable } from "../SQLDatabaseConnection/Insert_Table";
import { Create_user_table } from "../SQLDatabaseConnection/Create_Table";
import { update_user_Table } from "../SQLDatabaseConnection/Update_Table";

// fetch url 
const url = URL_Connection();

// fetch evetid
const eventId = eventID();
// load event data from server
export const event_Data_Load=async()=>{
  try {
    const response = await axios.get(`${url}/event/get/${eventId}`);
    console.log('Response:', response.data[0].title);
    return response.data[0];
  } catch (error) {
    console.log('Error:', error.response);
    throw error; // Re-throw the error if you want to handle it further
  }

}

// workshope data load
export const workshop_data_load=async()=>{
  try{
    const response = await axios.get(`${url}/workshop/get/${eventId}`);
    // console.log("workshop response",response.data);
    const workshop = response.data;
    const workshopeName = workshop.map(item => item.title);
    console.log("workshopne name load",workshopeName);
    // await insertWorkshopTable(workshop);
    // await Create_user_table(workshopeName);
    return await workshop;
  }
  catch(error){
    console.log('Error :',error);
    throw error;
  }
}

// workshop name and userdata
export const Data_for_Update_UserTable=async()=>{
  try{
    const workshopData = await workshop_data_load();
    const worksop =await workshopData.map(item => item.title);
    console.log("hii  hiii",worksop);

    const userData = await user_data_load();
    console.log("userdataforUpdation",userData);

    // update user Table
     await update_user_Table(userData,worksop);

  }
  catch(error){
    console.log(error);
  }
}
// load user data
export const user_data_load=async()=>{
   try{
    const response = await axios.get(`${url}/participants/get/${eventId}`);
    const userData = response.data;
    // await insert_To_UserTable(userData);
    return await userData;
    
   }
   catch(error){
      console.log('Error :',error);
   } 
}

 

