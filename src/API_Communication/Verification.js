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




export const unverify_user=async(userid,worshopname)=>{
    try{
        console.log("dtaaaa",userid,worshopname);
        const response = await axios.post(`${url}/volunter/unverify`,{
            "eventid":eventid,
            "workshop" : worshopname,
            "userid" : userid
        });
        console.log("out",response.data);
        return await response.data.verification;
    }
    catch(errr){
        console.error("error in unverification",errr);
    }
}