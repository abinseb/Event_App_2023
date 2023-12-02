import axios from "axios";
import { URL_Connection,eventID } from "../connection/Url_connection";


// fetch url
const url = URL_Connection();

// fetch eventId
const eventid = eventID();

export const userVerification=async(userID,workshopName)=>{
    try {
        console.log(userID, workshopName, eventid);
        const response = await axios.post(`${url}/volunter/verify`, {
            "eventid": eventid,
            "workshop": workshopName,
            "userid": userID
        });
    
        console.log(response.data.verification);
        return response.data.verification;  // Return the value
    
    } catch (error) {
        console.log("Error", error);
    }
    
}
