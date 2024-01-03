import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css"


function Login() {
    
  const [data, setData] = useState({
    email: "",
    password: "",
  });



  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data)
    axios.post("http://localhost:4003/user/login", data)
    .then((res) => {
      
        setData(res.data);
        
       

        console.log(res.data)
        if(res.data.msg==="email is inCorrect"){
          alert(res.data.msg)
          navigate('/login');
        }
        else if(res.data.msg==="password is wrong"){
          alert(res.data.msg)
          navigate('/login')
        }
        else if(res.data.msg==="user Login Successfully"){
            localStorage.setItem("token",res.data.token);
            alert("user Login Successfully",navigate("/dashboard"));
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

      setData({
        email: "",
        password: "",
      });
  };

  return (
    <div className="loginParent">
      <div className="logininner">
      <h3>Log in to your account</h3>
      <form className="loginForm" onSubmit={handleSubmit}>
       
      <br/>
   
        
        <label htmlFor="useremail">
       
        </label>
        <input className="text"
          type="email"
          name="email"
          id="useremail"
          onChange={handleChange}
          value={data.email}
          placeholder='Email'/>
        <br />
        <br />
        <label  htmlFor="password" >
        
        </label>
        <input
          className="text"
          type="password"
          maxLength="8"
          name="password"
          id="password"
          onChange={handleChange}
          value={data.password}
          placeholder=' Password'
        />
        <br />
        <br />
        <button className="Submitbutton" type="submit">
          Login
        </button>
        <br/>
        <div className="or">OR</div>
        <br/>
        <hr/>
        <div className="dont">
            Don't have an account?<NavLink to="/register" className="nextpage"> Signup </NavLink>
        <span className="nextpage">Log in with your organization</span>
        </div>
     
        <br/>
      </form>
      </div>
     
    </div>
  );
}

export default Login;