import React, {useState } from "react";
import "./BasicForm2.css";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
   
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [userName, setUserName] = useState("");
  const [pass, setPassword] = useState("");
  const navigate = useNavigate();
  function login(event) {
    <ToastContainer />
    event.preventDefault()
    let payload ={};
    payload =  {"uid":userName,"password":pass,"blocked":0 }; 
    axios
      .post("https://myphysio.digitaldarwin.in/api/login/", payload)
      .then((res) => {
        console.log(res);
        if(res.status ===200){
          toast.success('Login Successfull', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        localStorage.setItem("AUTHENTICATION_TOKEN",res.data.jwt);
        localStorage.setItem("USER_INFO",res.data.basic_info);
        localStorage.setItem("USER_PERMISSION",JSON.stringify(res.data.permission));
        navigate("/admin",{replace:true});
      }
      
    })
      .catch((err) => {
        toast.error(err.message,{autoClose:5000});  
      });
  
  }
  return (
    <>
      <ToastContainer position="top-center"/>
      <form className="cover">
        <h1>Login</h1>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            id="username"
            autoComplete="off"
            autoFocus
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            autoComplete="off"
            value={pass}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button onClick={login}> Login</button>

      </form>
    </>
    
  );
}
export default Login;
