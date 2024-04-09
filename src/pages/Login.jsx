import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Loading from '../components/loading/Loading'
import styles from '../css/login.module.css'
import { loginUser } from '../features/user/userSlice'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordType, setPasswordType] = useState('password')
  const dispatch = useDispatch()
  const { isLoading, response } = useSelector((store) => store.user)
  const user = JSON.parse(sessionStorage.getItem('user'))

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginUser({ email, password }))
  }

  return (
    <div className={styles.main}>
      {isLoading && <Loading />}
      {user && <Navigate to={`/dashboard/${user._id}`} replace={true} />}
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2>Login</h2>
        <input
          type='email'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{' '}
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
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}
export default Login
