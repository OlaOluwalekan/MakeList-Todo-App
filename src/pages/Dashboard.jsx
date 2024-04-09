import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import Loading from '../components/loading/Loading'
import Pagination from '../components/todos/Pagination'
import Todos from '../components/todos/Todos'
import styles from '../css/dashboard.module.css'
import { getAllTodos } from '../features/todo/todoSlice'

const Dashboard = () => {
  const { id } = useParams()
  const user = JSON.parse(sessionStorage.getItem('user'))

  const { response, todos, isLoading, page } = useSelector(
    (store) => store.todos
  )
  const dispatch = useDispatch()

  const params = {
    id,
    page,
  }

  useEffect(() => {
    dispatch(getAllTodos(params))
  }, [page])

  // console.log(todos)

  if (!user) {
    return <Navigate to='/' />
  }

  return (
    <div className={styles.main}>
      <h3>
        Dashboard {'>'} <span>{user.name}</span>
      </h3>
      {isLoading ? <Loading /> : <Todos todos={todos} />}
      <Pagination />
    </div>
  )
}
export default Dashboard
