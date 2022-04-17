import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

import { signIn, signUp } from '../../../redux/actions/auth';
import Input from './Input';



function Auth() {
const navigate=useNavigate();
const dispatch=useDispatch();
const initialState={email:'', password:'', confirmPassword:'', firstName:'', lastName:''}
const [isSignup, setIsSignup]=useState(false);
const [formData, setFormData]=useState(initialState);

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

    setFormData({...formData, [e.target.name]: e.target.value.replace("<script>", 'OH NO you dont')})
    
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
                        <div>
                          <div>
                            <button onClick={switchMode}>
                                {isSignup? 'Alredy have an account? Sign IN':"Don't have an account? Sign UP"}
                            </button>
                          </div>
                        </div>
                      </form>
              </div>
          </div>
  )
}

export default Auth