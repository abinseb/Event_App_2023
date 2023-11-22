import { openDatabase } from "expo-sqlite";
const db = openDatabase('Event.db');

// create event_table
export const  Create_Event_Data_Table=()=>{
    db.transaction(tx=>{
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS event_table (id INTEGER PRIMARY KEY ,name TEXT,img BLOB);',
            [],
            ()=>console.log('Event table created'),
            error => console.error('Error event :',error)
        );
    });
}

// create workshops table
export const Create_Workshops_Table=()=>{
    db.transaction(tx=>{
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS workshop_table (id INTEGER PRIMARY KEY ,workshopName TEXT,start TEXT,end TEXT,workshopIcon BLOB);',
            [],
            ()=>console.log('Workshop table created'),
            error => console.error('Error workshop',error)
        );
    });
}


// create user table dynamicaly
export const Create_user_table=(workshoplist,verificationlist)=>{
    db.transaction(tx=>{
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS user_table(id PRIMARY KEY , name TEXT,mobileNumber TEXT , email TEXT ${workshoplist.map((workshop,index)=>`${workshop} TEXT`)})`,
            [],
            ()=>console.log("created user table "),
            (error)=> console.log(error),
        );
    });
}


// list the tables in the db
export const tableList=()=>{
  db.transaction(tx=>{
    tx.executeSql(
        'SELECT name FROM sqlite_master WHERE type=?;',
        ['table'],
        (_,{rows})=>{
            const data = rows._array;
            console.log(data);
        }
    )
  })
}



// offline verification table

export const create_Offline_table=()=>{
    db.transaction(tx=>{
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS offline_table(id INTEGER,workshopName TEXT);',
            [],
            ()=>console.log("offline_table created"),
            (error)=>console.log(error),

        );
    });
}