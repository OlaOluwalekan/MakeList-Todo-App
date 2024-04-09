import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useLocation } from 'react-router-dom'
import styles from '../../css/navbar.module.css'
import { logoutUser } from '../../features/user/userSlice'
import Loading from '../loading/Loading'

const Navbar = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const { isLoading, response } = useSelector((store) => store.user)
  const user = JSON.parse(sessionStorage.getItem('user'))

  const logout = () => {
    dispatch(logoutUser())
  }

  return (
    <header className={styles.header}>
      {isLoading && <Loading />}
      {location.pathname.includes('dashboard') && !user && <Navigate to='/' />}
      <section>
        <h1>
          Make<span>List</span>
        </h1>

        <nav>
          <Link to='/'>Home</Link>
          {(location.pathname === '/' ||
            location.pathname === '/register' ||
            location.pathname === '/login') && (
            <Link to='/register'>Register</Link>
          )}
          <Link to='/login'>Login</Link>
          {location.pathname.includes('dashboard') && (
            <button onClick={logout}>Logout</button>
          )}
        </nav>
      </section>
    </header>
  )
}
export default Navbar
