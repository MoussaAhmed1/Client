const initial =  localStorage.getItem('Auth') !== null ? JSON.parse( localStorage.getItem('Auth')) : {
    password:"",
    username:"",
    iSLogged:false
}

const AuthReducer = (state=initial,action)=>{
    switch(action.type){
        case"SET_AUTH":
        return {
            ...state,
            ...action.payload
        }
            
        
        case"LOGIN":
        return {...state,iSLogged:true}

        case"LOGOUT":
        return {...state,iSLogged:false}

        default:
            return state;

    }
}
export default AuthReducer;