import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {login} from "../Redux/AuthReducer/action"
import { USER_LOGIN_SUCCESS } from '../Redux/AuthReducer/actionTypes';

const Login = () => {
  const [email, setEmail]= useState("");
  const dispatch= useDispatch();
  const navigate= useNavigate();
  const location = useLocation();
  const comingFrom= location.state?.from?.pathname || "/"

  const [password, setPassword]= useState("");

  const handleSubmit= (e) =>{
    e.preventDefault();
    if(email && password){
      dispatch(login({email,password}))
      .then((r)=>{
        if (r.type === USER_LOGIN_SUCCESS){
            navigate(comingFrom, {replace: true});
        }
      })
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label >User Name</label>
          <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label >User Password</label>
          <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login