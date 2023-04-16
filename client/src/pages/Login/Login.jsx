import React, { useEffect, useRef, useState } from "react";
import './Login.css'
import axiosInstance from "../../axiosConfig/axiosConfig";
import Loader from './../../components/Loader/Loader';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import setTodos from "../../Redux/Actions/TodosActions";
import { setAuth } from "../../Redux/Actions/AuthActions";

function Login() {
  const [users, SetUsers] = useState([]);
  const [selectedUser, SetSelectedUser] = useState(null);
  const [active, setActive] = useState(0);
  const loader = useSelector((state) => state.Loader.loader);
  const [password, SetPassword] = useState("");
  const [warning,setWarning] = useState("");
  const iSLogged = useSelector((state) => state.Auth.iSLogged)
    //hooks
  const passwordInRef = useRef(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const Auth = useSelector(state=>state.Auth);
  
  useEffect(() => {
    axiosInstance
      .get("/users")
      .then((res) => SetUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if(selectedUser !== null){
        
        passwordInRef.current.focus()
    }
  },[selectedUser])

  const handleSelectUser= (user) =>{

    SetSelectedUser(user)
    setActive(user.id)
    
  }


  const handleLogin = async (e) => {
        //localstorage 
        e.preventDefault()
        await dispatch(setTodos(selectedUser.username, password))
        const Auth =  JSON.parse( localStorage.getItem('Auth'))  ;
        dispatch(setAuth(Auth))
       if(Auth.iSLogged){
         navigate("/")
       }
       else{
        setWarning("unmatched password")
       }
    
  };
  return (
    <section className="login ">
      <div className="container h-100">
          <div className="row">
            <h1 className="display-1 text-center py-4">Todo app</h1>
          </div>
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-11">
                        <div className="card">
                            <div className="row">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                <img
                                    src="https://images.pexels.com/photos/7129052/pexels-photo-7129052.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                                    alt="login form"
                                    className="img-fluid"
                                />
                                </div>

                                <div className="col-md-6 col-lg-7 py-3">
                                    {
                                        loader ?
                                        <Loader/>
                                        :
                                        <form className="d-flex flex-column w-100 justify-content-center px-2 gap-3" onSubmit={e=>handleLogin(e)} >
                                            <h4>Select a user</h4>
                                                <div className="users d-flex gap-5 justify-content-around">
                                                    {
                                                        users.length > 0 && users.map((user)=>{
                                                            return(
                                                               
                                                                    <div onClick={()=>handleSelectUser(user)} className={`${active==user.id?"active":"not"} user row gab-1 justify-content-center text-center fw-200`} key={user.id}>
                                                                        <div className="img-wrapper bg-light">
                                                                             <img src={user.avatar} alt="" className="w-100" />
                                                                        </div>
                                                                        <span >{user.username}</span>
                                                                    </div>
                                                              
                                                            )
                                                        })
                                                    }
                                                </div>
                                            {
                                               selectedUser != null &&
                                               <div className="row d-flex flex-colmn gap-4 m-auto w-50 py-5 ">
                                               <div className="form-group text-center ">
                                                   <input required type="password" ref={passwordInRef}  placeholder={`Enter ${selectedUser.username} password `} className="form-control w-100 m-auto " value={password} onChange={(e)=>SetPassword(e.currentTarget.value)} />
                                               </div>
                                                   <button  type="submit" className="btn btn-primary w-100">Login</button>
                                                   {warning.length>0 && <p className="text-danger text-center">{warning}</p>}
                                               </div>
                                            }
                                        </form>
                                    }
                                </div>
                            </div>
                        </div>
                </div>
            </div>
      </div>
    </section>
  );
};

export default Login;
