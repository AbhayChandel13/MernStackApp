export const initialState = null;
// export const initialState = {isLoggedIn: false};
// export const initialState ={ loggedIn: localStorage.getItem('isLoggedin' ) || null};

export const reducer = (state,action)=> {    

    if (action.type==="USER"){
        return action.payload;
    }
    return state;
}

    // switch (action.type) {
    //     case "USER":{
    //         return{
    //             ...state,
    //             isLoggedIn : true
    //         }
    //     }   
    //     case "NoUSER":{
    //         return{
    //             ...state,
    //             isLoggedIn : false
    //         }
    //     }         

    //     default:
    //         return state;
         
    // }
