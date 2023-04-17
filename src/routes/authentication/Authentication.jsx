// import { getRedirectResult } from 'firebase/auth'
// import { useEffect } from 'react'
import SignInForm from '../../components/sign-in/SignInForm'
import SignUpForm from '../../components/sign-up/Signupform'
import {auth, createUserDocumentFromAuth, signInWithGooglePopup,
  // signInWithGoogleRedirect 
} from '../../utils/firebase/Firebase'
function Authentication() {
  // useEffect( () =>{
  //   async function redirectData(){
  //     const response = await getRedirectResult(auth)
  //     if(response){
  //       const userDocRef = await createUserDocumentFromAuth(response.user) 
  //     }
  //     console.log(response);
  //   }

  //   redirectData()
    
  // },[])

  // const logGoogleRedirectUser = async () =>{
  //   const {user} = await signInWithGoogleRedirect()
  //   console.log(user);
  // }
  return (
    <div>
      <h1>Sign In Page</h1>
    {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
    <SignInForm/>
    <SignUpForm/> 
    </div>
  )
}

export default Authentication