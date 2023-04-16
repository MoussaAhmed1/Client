import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../Redux/Actions/AuthActions';

export default function Navbar() {
    const dispatch = useDispatch();
    const Auth = useSelector(state=>state.Auth);
    const {iSLogged} = Auth;
    const handelLogout = ()=>{
        dispatch(logout())
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
        <div className="container-fluid">
          <h1>
          <Link to='/' className='navbar-brand logo'>Alex</Link>
            </h1> 
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <button onClick={handelLogout}  className="nav-link bg-none" aria-current="page" to="/Login"><i className="fa-solid fa-right-to-bracket m-2"></i>Logout</button>
            </li>
                
            </ul>
          </div>
        </div>
      </nav>
    )
  }
  