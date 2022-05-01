import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

import * as api from '../../../redux/api/index'
import Input from './Input';



function Auth() {

  document.title="Pwl/Auth";

const navigate=useNavigate();
const dispatch=useDispatch();
const initialState={email:'', password:'', confirmPassword:'', firstName:'', lastName:''}
const [isSignup, setIsSignup]=useState(false);
const [formData, setFormData]=useState(initialState);
const [isError, setIsError]=useState(null);

// API SIGNING UP/IN

 const signIn=(FormData, navigate)=> async(dispatch)=>{

  try {

      const {data}=await api.signIn(FormData);
      dispatch({type: "AUTH", data })
      
      console.log("zalogowany");

      navigate('/')

  } catch (error) {
      setIsError(error);
      console.log("Big",error.res.data)
      
  }
}


 const signUp=(FormData, navigate)=> async(dispatch)=>{
  
  try {
      const {data}=await api.signUp(FormData);
      dispatch({type: "AUTH", data })
      console.log("New user is registered")
      navigate('/postmaker')
      
  } catch (error) {
      setIsError(error);
      console.log(error)
      
  }
}





  const handleSubmit=(e)=>{
    e.preventDefault();
  
      
          if( isSignup){
            dispatch(signUp(formData, navigate))
          }
          else{
            dispatch(signIn(formData, navigate))
             }
        }
 
  

  const handleChange=(e)=>{

    setFormData({...formData, [e.target.name]: e.target.value.replace('<script>', 'You wont do this NOPE')})
    
  }

  const switchMode=()=>{
      setIsSignup((prevIsSignUP)=> !prevIsSignUP)
  }
  return (

          <div className='login-container'>
              <div className='paper'>
                      {/*Tutaj jakieś zdjęcie powinno być */}
                      <h1>Sign {isSignup? 'UP': 'IN'}</h1>
                      <form className='form' onSubmit={handleSubmit}>
                        <div className='login-container-inputs'>
                          {
                            isSignup && (
                              <>
                                <Input name='firstName' placeholder='First name' onChange={handleChange}/>
                                <Input name='lastName' placeholder='Last name' onChange={handleChange}/>
                              </>
                            )
                          }
                          <Input name="email"  onChange={handleChange} type='email'/>
                          <Input name="password" onChange={handleChange} type='password'/>
                          { isSignup && <Input name='confirmPassword' type='password' onChange={handleChange}  />}
                        </div>
                          
                        <button type='submit' className='submit'>
                          {isSignup? 'Sign UP':'Sign IN'}
                          
                        </button>
                          {isError?<h6 style={{color:"red"}}>Something went wrong, User.</h6>:null}
                        <div>
                          <div>
                            <h6 className='sign' onClick={switchMode}>
                                {isSignup? 'Alredy have an account? Sign IN!':"Don't have an account? Sign UP!"}
                            </h6>
                          </div>
                        </div>
                      </form>
              </div>
          </div>
  )
}

export default Auth