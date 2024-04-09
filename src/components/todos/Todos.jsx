import SingleTodo from './SingleTodo'

const Todos = ({ todos }) => {
  return (
    <section>
      {todos.map((todo) => {
        return <SingleTodo key={todo._id} {...todo} />
      })}
    </section>
  )
}
export default Todos
