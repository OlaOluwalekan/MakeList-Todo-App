import { FaPencilAlt, FaTrash } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { setChecked, updateTodo } from '../../features/todo/todoSlice'

const SingleTodo = ({ _id, title, completed }) => {
  const dispatch = useDispatch()
  const { page } = useSelector((store) => store.todos)

  const params = {
    id: JSON.parse(sessionStorage.getItem('user'))._id,
    todoId: _id,
    data: { completed: !completed },
  }

  return (
    <div>
      <h3>{title}</h3>
      <input
        type='checkbox'
        name='check'
        id={`check${_id}`}
        onChange={() => {
          dispatch(updateTodo(params))
          // dispatch(setChecked(params))
        }}
        checked={completed ? true : false}
      />
      <label htmlFor={`check${_id}`}>Completed</label>
      <article>
        <button>
          <FaTrash />
        </button>
        <button>
          <FaPencilAlt />
        </button>
      </article>
    </div>
  )
}
export default SingleTodo
