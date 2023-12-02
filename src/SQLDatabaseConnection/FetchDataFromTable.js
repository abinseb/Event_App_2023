import { openDatabase } from "expo-sqlite";
import { eventID } from "../connection/Url_connection";
const db = openDatabase('Event.db');
// eventId
const eventid = eventID();
// fetch event name from event_table
export const eventDataFetch = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.transaction((tx) => {
                tx.executeSql(
                    'SELECT title FROM event_table WHERE id = ?;',
                    [eventid],
                    (_, { rows }) => {
                        const eventdata = rows._array;
                        if (eventdata.length > 0) {
                            console.log("lll", eventdata[0]);
                            resolve(eventdata[0]);
                        } else {
                            // Resolve with null or appropriate value if no data is found
                            resolve(null);
                        }
                    },
                    (error) => {
                        console.error('Error fetching event data:', error);
                        reject(error);
                    }
                );
            });
        } catch (error) {
            console.error('Error in eventDataFetch:', error);
            reject(error);
        }
    });
  };

//   workshop data fetch
export const workshopDataFetch = async () => {
    return new Promise((resolve, reject) => {
        db.transaction(
            (tx) => {
                tx.executeSql(
                    'SELECT id,title,icon FROM workshop_table ;',
                    [],
                    (_, { rows }) => {
                        const workshopData = rows._array;
                        if (workshopData.length > 0) {
                            console.log("wwww", workshopData);
                            resolve(workshopData); // Resolve the promise with the workshop data
                        } else {
                            resolve([]); // Resolve with an empty array if no workshops are found
                        }
                    }
                );
            },
            (error) => {
                console.error("Error in database transaction:", error);
                reject(error); // Reject the promise in case of an error
            }
        );
    });
};


// usertable data
export const user_Table_data=()=>{
    db.transaction((tx)=>{
        tx.executeSql(
            'SELECT * FROM user_table;',
            [],
            (_,{rows})=>{
                const data =rows._array;
                console.log("usertBLE DATA,", data);
            }
        )
    }
    )
}

// fetch event id
export const userDetailsBasedOnIDFromTable = (userId) => {
    return new Promise((resolve, reject) => {
      try {
        db.transaction((tx) => {
          tx.executeSql(
            'SELECT * FROM user_table WHERE id = ?;',
            [userId],
            (_, { rows }) => {
              if (rows.length > 0) {
                const data = rows._array
                console.log("#######dtaa",data);
                resolve(data);
               
              } else {
                console.log("empty");
                resolve(null); // Resolve with null if no rows are found
              }
            },
            (_, error) => {
              reject(error); // Reject with the error if there's a SQL error
            }
          );
        });
      } catch (err) {
        console.error(err);
        reject(err); // Reject with the error if there's an exception
      }
    });
  };
  
// Fetch data from group table
export const group_dataFrom_groupTable = () => {
    return new Promise((resolve, reject) => {
      try {
        db.transaction((tx) => {
          tx.executeSql(
            'SELECT * FROM group_table;',
            [],
            (_, { rows }) => {
              if (rows.length > 0) {
                const data = rows._array
                console.log("#######dtaa",data);
                resolve(data);
               
              } else {
                console.log("empty");
                resolve(null); // Resolve with null if no rows are found
              }
            },
            (_, error) => {
              reject(error); // Reject with the error if there's a SQL error
            }
          );
        });
      } catch (err) {
        console.error(err);
        reject(err); // Reject with the error if there's an exception
      }
    });
  };