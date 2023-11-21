// import { LOGIN_SUCCESS,LOGOUT_SUCCESS } from "./Actions";

const initialState ={
    username:null,
    // loading:false,
    // error:null
};

const authReducer = (state = initialState,action)=>{
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return{...state , username:action.payload.username,};
        case 'LOGOUT_SUCCESS':
            return{...state , user:null};
        default:
            return state;
    };
};

export default authReducer