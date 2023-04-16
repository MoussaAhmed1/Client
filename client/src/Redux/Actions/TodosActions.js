
import axiosInstance from './../../axiosConfig/axiosConfig';
export default function setTodos(username, password) {
  return ( async (dispatch)=>
  { 
    
        const credentials = `${username}:${password}`;
        const encodedCredentials = btoa(credentials);

     await  axiosInstance.get('/todos',{
            headers: {
                Authorization: `Basic ${encodedCredentials}`
            }
        })
        .then(response => {
            //set Auth
            localStorage.setItem('Auth', JSON.stringify({password:password,username:username,iSLogged:true}));
            //set todos
            dispatch( {type:"SET_TODOS",payload:response.data})
            localStorage.setItem('Todos', JSON.stringify({todos:response.data}))
        })
        .catch((error) => {
            localStorage.setItem('iSLogged', JSON.stringify(false));
           console.log(error)
        });
            
   
  })
}

export function addTodo(text,_id,username, password) {
    return ( async (dispatch)=>
  { 
        const credentials = `${username}:${password}`;
        const encodedCredentials = btoa(credentials);
     await  axiosInstance.post('/todos',{"task":text},{
         headers: {
            Authorization: `Basic ${encodedCredentials}`
        }})
        .then(response => {
            if(response.status == 200) 
            {dispatch({
                type: "ADD_TODO",
                payload: {
                  id: _id,
                  task:text,
                  completed: false,
                }
            }) }
        })
        .catch((error) => console.log(error))
  
    })
}
export function ToogleTodo(_id,username, password) {
    return (  (dispatch)=>
  { 
        const credentials = `${username}:${password}`;
        const encodedCredentials = btoa(credentials);
       axiosInstance.put(`/todos/`,{id:_id},{
        headers: {
            Authorization: `Basic ${encodedCredentials}`
        }
    })
        .then(response => {
            if(response.status == 200) 
            {dispatch(
                {
                    type: "TOGGLE_TODO",
                    payload: {
                        id: _id,
                    }
                })}
        })
        .catch((error) => console.log(error))
  
    })
}
export function DeleteTodo(_id,username, password){
 return (  (dispatch)=>
{ 
      const credentials = `${username}:${password}`;
      const encodedCredentials = btoa(credentials);

     axiosInstance.delete(`/todos/:${_id}`,{
    headers: {
        Authorization: `Basic ${encodedCredentials}`
    }
    })
      .then(response => {
        console.log(response)
        if(response.status == 200) 
          {dispatch(
             {
                type: "DELETE_TODO",
                payload: {
                  id: _id,
                }
              }
          )}
      })
      .catch((error) => console.log(error))

  })
}