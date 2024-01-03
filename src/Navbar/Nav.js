import {  NavLink, Route, Routes, useNavigate} from "react-router-dom";
import "./Nav.css";
import Login from "../User/Login";
import PrivateComponent from "./PrivateComponent";
import Dashboard from "./Dashboard";
import Signup from "../User/Register";


const  Nav=()=> { 

    const auth = localStorage.getItem('token')


    console.log(auth)
    const navi = useNavigate();
    const logout = ()=>{
      console.log("Logout")
      localStorage.clear(auth);
    
      navi('/register');
    }
  

    return(
        <>
        <div className="navContainer">
            
            {
                auth?
                <>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                    
                    <button onClick={logout} className="logout">Logout</button>
                </>:
                <>
                    <NavLink to= "/login" >
                Login
            </NavLink>
            <NavLink to = "/register">Signup</NavLink>
                </>
            }
        </div>
        <Routes>
        
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Signup/>}/>
        
        
        <Route element={<PrivateComponent/>}>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Route>  
    
        </Routes> 
        </>
    )
}

export default Nav