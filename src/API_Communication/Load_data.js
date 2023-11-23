import axios from "axios";
import { URL_Connection, eventID } from "../connection/Url_connection";
import { insertWorkshopTable } from "../SQLDatabaseConnection/Insert_Table";

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
    await insertWorkshopTable(workshop);
  }
  catch(error){
    console.log('Error :',error);
    throw error;
  }
}

// load user data
export const user_data_load=async()=>{
      await axios.get(`${url}/participants/get/${eventId}`)
          .then((res) => {
            console.log("Response data:", res.data[0]);
            
          })
          .catch((error) => {
            console.error("Error:", error);
          });
}

