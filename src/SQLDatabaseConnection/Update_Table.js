// update user table for updating wrkshops
import { openDatabase } from "expo-sqlite";
import { offline_dataInsert } from "./Insert_Table";
const db = openDatabase('Event.db');


// update user data based on id
export const update_user_Table =(userData ,workshop )=>{
    try{
        console.log("parameters",workshop);
        db.transaction((tx)=>{
            userData.forEach(element => {
               workshop.forEach(workshop =>{
                console.log("valuesof workshop",element.workshops[workshop]);
                tx.executeSql(
                    `UPDATE user_table SET ${workshop} = ? WHERE id = ?;`,
                    [element.workshops[workshop] , element._id],
                    ()=>console.log("updated successfully user_table"),
                    (error)=> console.log("updation error",error)
                )  
               })            
            });
        })
    }
    catch(error){
        console.error(error)
    }
}

export const userVerification_Offline=(userid,workshop)=>{
    try{
        db.transaction((tx)=>{
            tx.executeSql(
                `UPDATE user_table SET ${workshop} = ? WHERE id = ? ;`,
                ['2',userid],
                ()=>{
                    offline_dataInsert(userid,workshop);
                    alert("Verified");
                    console.log("userverified_offline");
                    },
                (error)=>console.log("verificationError",error)
            )
        })
    }
    catch(error){
        console.log("Transaction error", error);
    }
}

// unverify
export const unverification_Offline=(userid,workshop)=>{
    try{
        db.transaction((tx)=>{
            tx.executeSql(
                `UPDATE user_table SET ${workshop} = ? WHERE id = ? ;`,
                ['1',userid],
                ()=>{
                    alert("Verified");
                    console.log("unverified_offline");
                    },
                (error)=>console.log("unverificationError",error)
            )
        })
    }
    catch(error){
        console.log("unverification_Transaction error", error);
    }
}