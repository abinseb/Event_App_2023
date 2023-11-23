import { openDatabase } from "expo-sqlite";
import { event_Data_Load, workshop_data_load } from "../API_Communication/Load_data";
const db = openDatabase('Event.db');

// insert data into event table
export const insertEventTable = async () => {
    try {
        const eventData = await event_Data_Load();
        console.log(eventData.title);

       await db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO event_table (id, title, description, host, date, venu) VALUES (?, ?, ?, ?, ?, ?);',
               [
                eventData._id,
                eventData.title,
                eventData.description,
                eventData.host,
                eventData.venu,
               ],
                () => console.log('Event inserted successfully'),
                (tx, error) => console.error('Error inserting event:', error)
            );
        });
    } catch (error) {
        console.error('Error loading event data:', error);
        
    }
};

export const insertWorkshopTable=async(workshopData)=>{
    try{
       
            db.transaction((tx)=>{
                workshopData.forEach((element) => {
                    console.log("kkkk",element.title ,element._id,
                    element.title,
                    element.description,
                    element.venu,
                    element.date,
                    element.event,
                    );
                 tx.executeSql(
                    'INSERT INTO workshop_table (id,title,description,venu,date,event,icon) VALUES (?,?,?,?,?,?,?);',
                    [
                        element._id,
                        element.title,
                        element.description,
                        element.venu,
                        element.date,
                        element.event,
                        element.icon
                    ],
                    ()=>console.log("inerted workshop"),
                    (error)=>{
                        console.error("eworkshop insert error")
                        console.log(error)
                
                }
                )
            })
            
        });
    }
   catch(error){
    console.log("error loading workshop data",error);
   }
}