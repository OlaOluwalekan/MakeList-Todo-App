import { useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { nextPage, prevPage } from '../../features/todo/todoSlice'

const Pagination = () => {
  const { response, totalPage, page, pages } = useSelector(
    (store) => store.todos
  )
  const dispatch = useDispatch()
  // const pages = []

  // console.log(page, totalPage, pages)

  // useEffect(() => {
  //   const todoData = JSON.parse(sessionStorage.getItem('todoData'))

  //   if (todoData) {
  //     for (let i = 1; i <= todoData.totalPage; i++) {
  //       pages.push(i)
  //     }
  //   } else {
  //     pages.push(1)
  //   }
  // })

  return (
    <article>
      <button
        onClick={() => dispatch(prevPage())}
        disabled={page === 1 ? true : false}
      >
        <FaChevronLeft />
      </button>
      <aside className='test'>
        {pages.map((p, i) => {
          return (
            <span
              key={i}
              style={{
                background: page === i + 1 ? 'green' : 'none',
                color: page === i + 1 ? 'white' : 'green',
              }}
            >
              {p}
            </span>
          )
        })}
      </aside>
      <button
        onClick={() => {
          dispatch(nextPage())
        }}
        disabled={page === totalPage ? true : false}
      >
        <FaChevronRight />
      </button>
    </article>
  )
}
export default Pagination
