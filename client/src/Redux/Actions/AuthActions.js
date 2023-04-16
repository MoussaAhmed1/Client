const setAuth =  function(data) {
   
       return{
            type:"SET_AUTH",
            payload:data
       }
  
}

const logout = function() {
    localStorage.setItem("Auth",JSON.stringify({password:"",username:"",iSLogged:false}))
    return{
        type: "LOGOUT",
    }
}





export {setAuth,logout}