import { getEventId } from "../AsyncStorage/StoreUserCredentials";

export const URL_Connection=()=>{
    const apiurl = 'http://192.168.1.122:3000';
    return apiurl;
}

export const eventID=async()=>{
    const eventid = await getEventId();
    console.log("StoredEventId",eventid);
    return  eventid;
}
