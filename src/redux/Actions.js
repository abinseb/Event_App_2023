// export const LOGIN_SUCCESS ='LOGIN_SUCCESS';
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';


export const loginSuccess =(username)=>({
    type:'LOGIN_SUCCESS',
    payload:{username},
});

// export const logoutSuccess=()=>({
//     type:'LOGOUT_SUCCESS',
// });


// login user 
export const loginUser =(userData)=>{
    return(dispatch , getState)=>{
        dispatch(loginSuccess(userData));
    }
}




// event details
// export const eventSelect=(event)=>{
//     return{
//         type:'SET_EVENT_STRING',
//         payload:event,
//     };
// };