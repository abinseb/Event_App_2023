import axios from "axios";

// load event data from server
export const event_Data_Load=()=>{
 
        axios.get('http://192.168.1.118:3000/participants/get/6549f0527a62f323d043db53')
          .then((res) => {
            console.log("Response data:", res.data[0].event);
            
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      
      
}