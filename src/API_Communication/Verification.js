import axios from "axios";

import { URL_Connection,eventID } from "../connection/Url_connection";


// fetch url
const url = URL_Connection();

// fetch eventId
const eventid = eventID();

export const userVerification=async(userID,workshopName,token)=>{
    try {
        console.log(userID, workshopName, eventid,token);
        const response = await axios.post(`${url}/volunter/verify`, {
            "eventid": eventid,
            "workshop": workshopName,
            "userid": userID
        },{
            headers:{
                Authoriztion:token,
            },
        });
    
        console.log(response.data.verification);
        return response.data.verification;  // Return the value
    
    } catch (error) {
        console.log("Error", error);
    }
    
}




export const unverify_user=async(userid,worshopname,token)=>{
    try{
        console.log("dtaaaa",userid,worshopname);
        const response = await axios.post(`${url}/volunter/unverify`,{
            "eventid":eventid,
            "workshop" : worshopname,
            "userid" : userid
        },{
            headers:{
                Authoriztion:token,
            },
        });
        console.log("out",response.data);
        return await response.data.verification;
    }
    catch(errr){
        console.error("error in unverification",errr);
    }
}

// http://localhost:3000/volunter/sync

export const sync_OfflineData_verification=async(offlineData)=>{
    try{
      const response = await axios.post(`${url}/volunter/sync`,{
            "event" : eventid,
            "data" :offlineData,
        });
        console.log(response.data);
        return response.data;
    }
    catch(errr){
        console.log("Error in syncing",errr);
    }
}