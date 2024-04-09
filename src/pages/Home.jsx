import { Link, useLocation } from 'react-router-dom'
import styles from '../css/home.module.css'

const Home = () => {
  return (
    <section className={styles.main}>
      <h2>Plan your Schedule; Dont miss anything!</h2>
      <p>
        with MakeList You dont have to worry about being late. Planning may ne
        tegious and that's why we do it for you
      </p>
      <div>
        <Link to='/register'>get started</Link>
        <Link to='/login'>login</Link>
      </div>
    </section>
  )
}
export default Home
