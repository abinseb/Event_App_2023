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