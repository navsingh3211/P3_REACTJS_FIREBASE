import React ,{useState} from 'react'
import '../index.css';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {useFirebase} from '../context/Firebase';


const Auth = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const firebase = useFirebase();

  const navigate = useNavigate();

  const signUpUser = ()=>{
    firebase.signupUserWithEmailAndPassword(email,password).then(
      (value)=>{
        if(value){
          toast.success('Signup success!');
          navigate('/createData');
        }
        // console.log(value,'value')
      }
    );
  }
  return (
    <>
      <h1>SignUp</h1>
      <div className='sign-up'>
        <label for="email">Email</label>
        <input type="email" id="email" required placeholder="Enter your email here"
          onChange={(e)=> setEmail(e.target.value)}
        />
        <label for="password">Password</label>
        <input type="password" id="password" required placeholder="Enter your password here"
          onChange={(e)=> setPassword(e.target.value)}
        />
        <button id="signupBtn" onClick={signUpUser}>Signup</button>
      </div>
    </>
  )
}

export default Auth


