import React from 'react'
import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registrationRequest } from '../../APIrequest/APIrequest'
import { ErrorToast, isEmail, isEmpty, isMobile, SuccessToast } from '../../helper/FormHelper'
import './Registration.css'

const Ragistration = () => {
  let emailRef,firstNameRef,lastNameRef,mobileRef,passwordRef = useRef()
  const navigate = useNavigate()
  const submitRegistration = ()=>{
    
    let email = emailRef.value
    let firstName =  firstNameRef.value
    let lastName = lastNameRef.value
    let mobile=mobileRef.value
    let password = passwordRef.value
    let photo = ""
  
    if(!isEmail(email)){
      ErrorToast("Valid Email address required")
    }else if(isEmpty(firstName)){
      ErrorToast("First Name required")
    }
    else if(isEmpty(lastName)){
      ErrorToast("Last Name required")
    }
    else if(!isMobile(mobile)){
      ErrorToast("valid mobile required")
    }
    else if(isEmpty(password)){
      ErrorToast("Password Required")
    }else{
     registrationRequest(email,firstName,lastName,mobile,password,photo).then((result)=>{
      if(result === true){
        SuccessToast("Registered Successfully")
        navigate('/login')
      }
     })
    }
  }
  return (
    <>
    <div className="registration">
      <h4>Sign Up</h4>
      <input ref={(input)=>emailRef=input} type="email" placeholder='email' />
      <input ref={(input)=>firstNameRef=input} type="text" placeholder='John' />
      <input ref={(input)=>lastNameRef=input} type="text" placeholder='Doe' />
      <input ref={(input)=>mobileRef=input} type="text" placeholder='01xxxxxx' />
      <input ref={(input)=>passwordRef=input} type="password" placeholder='******' />
      <button onClick={submitRegistration}>Sign Up</button>
      <span className='alreadyLogged'>Already Logged In - <Link to='/login'>Sign In</Link></span>
    </div>
    </>
  )
}

export default Ragistration