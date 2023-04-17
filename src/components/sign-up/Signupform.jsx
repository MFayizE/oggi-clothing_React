import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/Firebase"
import FormInput from "../form-input/FormInput"
import './Signupform.scss'
import Button from "../button/Button"

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields
  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()


    if (password === confirmPassword) {
      try {
        const { user } = await createAuthUserWithEmailAndPassword(email, password)
        console.log(user);

        await createUserDocumentFromAuth(user, { displayName })
        resetFormFields()
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          alert('email already in use')
        }
        console.log('error at sign up', error);
      }

    }
    else {
      alert('password do not match')
      return;
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value })
  }
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type="text" required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
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
        <FormInput
          label='Confirm Password'
          type="password" required 
          onChange={handleChange} 
          name="confirmPassword" 
          value={confirmPassword}
        />
        <Button buttonType='default' type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUpForm