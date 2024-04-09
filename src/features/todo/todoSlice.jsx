import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const todoData = JSON.parse(sessionStorage.getItem('todoData'))

const initialState = {
  isLoading: false,
  response: '',
  todos: todoData ? todoData.todos : [],
  todoData: JSON.parse(sessionStorage.getItem('todoData')) || {},
  page: todoData ? Number(todoData.currentPage) : 1,
  totalPage: todoData ? todoData.totalPage : 1,
  pages: [],
  checked: false,
}

export const getAllTodos = createAsyncThunk(
  'todos/getAllTodos',
  async (params) => {
    try {
      const { data } = await axios(
        `https://ola-todo-app.cyclic.app/api/v1/todos/${params.id}/query?page=${params.page}`,
        { withCredentials: true }
      )
      // console.log(data)
      sessionStorage.setItem('todoData', JSON.stringify(data))
      return data
    } catch (error) {
      console.log(error)
    }
  }
)

export const updateTodo = createAsyncThunk(
  'todos/updateTodo',
  async (params) => {
    try {
      const { data } = await axios.put(
        `https://ola-todo-app.cyclic.app/api/v1/todos/${params.id}/${params.todoId}`,
        params.data,
        { withCredentials: true }
      )
      return data
    } catch (error) {
      console.log(error)
    }
  }
)

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page = state.page + 1
    },
    prevPage: (state) => {
      state.page = state.page - 1
    },
    setChecked: (state, action) => {
      state.checked = action.payload.completed
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTodos.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllTodos.fulfilled, (state, action) => {
        state.isLoading = false
        state.response = action.payload
        state.todos = action.payload.todos
        state.totalPage = action.payload.totalPage
        for (let i = 1; i <= state.totalPage; i++) {
          if (!state.pages.includes(i)) {
            state.pages.push(i)
          }
        }
      })
      .addCase(getAllTodos.rejected, (state) => {
        state.isLoading = false
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.isLoading = false
        // state.checked = !action.payload.completed
      })
  },
})

export const { nextPage, prevPage, setChecked } = todoSlice.actions

export default todoSlice.reducer
