import React ,{useState} from 'react'
import { getAuth , signInWithEmailAndPassword } from "firebase/auth";
import {app} from '../firebase';
import '../index.css';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const loginUpUser = ()=>{
    signInWithEmailAndPassword(auth,email,password).then((user)=>{
      if(user){
        if(user){
          toast.success('Login success!');
          setTimeout(()=>{
            navigate('/createData');
          },1000);
        }
      }
    })
  }
  

  return (
    <>
      <h1>Login</h1>
      <div className='sign-up'>
        <label for="email">Email</label>
        <input type="email" id="email" required placeholder="Enter your email here"
          onChange={(e)=> setEmail(e.target.value)}
        />
        <label for="password">Password</label>
        <input type="password" id="password" required placeholder="Enter your password here"
          onChange={(e)=> setPassword(e.target.value)}
        />
        <button id="signupBtn" onClick={loginUpUser}>Login</button>
      </div>
    </>
  )
}

export default Login