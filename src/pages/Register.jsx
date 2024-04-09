import { useState } from 'react'
import styles from '../css/register.module.css'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordType, setPasswordType] = useState('password')

  return (
    <div className={styles.main}>
      <form>
        <h2>Register</h2>
        <input
          type='text'
          placeholder='name (optional)'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type='email'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type={passwordType}
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          type='checkbox'
          name='check'
          id='check'
          onChange={() => {
            if (passwordType === 'password') {
              setPasswordType('text')
            } else {
              setPasswordType('password')
            }
          }}
        />
        <label htmlFor='check'>Show password</label>
        <br />
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}
export default Register
