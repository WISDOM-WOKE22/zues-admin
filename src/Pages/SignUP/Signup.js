import { useSignup } from "../../Hooks/useSignup"
import { useState } from "react"
import './Signup.css'

export default function Signup() {
    const [ name, setName ] = useState()
    const [ email, setEmail ] = useState()
    const [ password, setPassword ] = useState()
    const [ confirmPassword, setConfirmPassword ] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({
            name,
            email,
            password,
            confirmPassword
        })
    }
  return (
    <div className="SignUp-container">
      <div className="container-wrapper">
      <h2>Admin Signup page</h2>

      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          <span>Name</span>
          <input
            type='text'
            required
            placeholder="Name"
            className="form-input"
            onChange={(e) => setName(e.target.value)}
            value={name}
           />
        </label>
        <label>
            <span>Email</span>
            <input
             type='email'
             required
             placeholder='Email'
             className='form-input'
             onChange={(e) => setEmail(e.target.value)}
             value={email}
            />
        </label>
        <label>
            <span>Password</span>
            <input
             type='password'
             required
             placeholder='password'
             className='form-input'
             onChange={(e) => setPassword(e.target.value)}
             value={password}
            />
        </label>
        <label>
            <span>Confirm Password</span>
            <input
             type='password'
             required
             placeholder='password'
             className='form-input'
             onChange={(e) => setConfirmPassword(e.target.value)}
             value={confirmPassword}
            />
        </label>
        <button>SignUp</button>
      </form>
      </div>
    </div>
  )
}
