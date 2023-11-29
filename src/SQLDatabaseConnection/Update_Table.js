// update user table for updating wrkshops
import { openDatabase } from "expo-sqlite";
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