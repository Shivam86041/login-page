import React from 'react'
import { Link } from 'react-router-dom';
import "./BasicForm2.css"
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast()
function AdminPage(){


  function Logout(){
    <ToastContainer />
    toast.error('Logout Successfully',{autoClose:15000});
    if(localStorage.getItem("AUTHENTICATION_TOKEN")){
      localStorage.clear();
      

    }
  }
  return (
    <>
    <form className="cover">
        <h1>You have been logged in!!</h1>
        <Link  to="/login"><button  id='logout-btn' onClick={Logout}>
          Logout
        </button>
        </Link>
      </form>
      </>
  )
  }
export default AdminPage;