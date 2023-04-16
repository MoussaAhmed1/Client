import './App.css'
import {  Navigate, Route,Routes } from 'react-router-dom'
import Error404 from './pages/Error404/Error404';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import { useSelector } from 'react-redux';
import Navbar from './components/NavBar/NavBar';

function App() {
  
  
  const iSLogged = !!(useSelector(state=>state.Auth.iSLogged))
  return (
    <div className="App">
      {iSLogged && <Navbar/> }
     <Routes>
        <Route path='/' element={!iSLogged ?<Navigate to="/login" replace /> : <Dashboard/>}/>
        <Route path='/login' element={iSLogged ?<Navigate to="/" replace /> : <Login />}/>
        <Route path='*' element={<Error404/>}/>
     </Routes>
    </div>
  )
}

export default App
