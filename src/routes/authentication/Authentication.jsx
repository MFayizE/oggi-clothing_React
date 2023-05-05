// import { getRedirectResult } from 'firebase/auth'
// import { useEffect } from 'react'
import SignInForm from '../../components/sign-in/SignInForm'
import SignUpForm from '../../components/sign-up/Signupform'
import './Authentication.scss'
function Authentication() {
  return (
    <div className='authentication-container'>
    <SignInForm/>
    <SignUpForm/> 
    </div>
  )
}

export default Authentication