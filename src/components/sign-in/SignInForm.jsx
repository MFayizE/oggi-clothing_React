import { useState } from "react"
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/Firebase"
import FormInput from "../form-input/FormInput"
import './SignInForm.scss'
import Button from "../button/Button"


const defaultFormFields = {
  email: '',
  password: '',
}
function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields
  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signinWithGoogle = async () => {
    const { user } = await signInWithGooglePopup()
    await createUserDocumentFromAuth(user)
    // console.log(res);
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password)
      console.log(response);
      resetFormFields()
    } catch (error) {
      switch(error.code){
        case 'auth/wrong-password':
          alert('wrong password')
          break;
        case 'auth/user-not-found':
          alert('user not found')
          break;
        default:
          console.log('error: ', error);
      }

    }

  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value })
  }
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>

        <FormInput
          label='Email'
          type="email"
          required onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label='Password'
          type="password" required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button buttonType='default' type="submit">Sign In</Button>
          <Button buttonType='google' type='button' onClick={signinWithGoogle}>Google sign in</Button>

        </div>
      </form>
    </div>
  )
}

export default SignInForm