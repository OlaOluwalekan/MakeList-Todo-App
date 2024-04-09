import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user/userSlice'
import todoReducer from './features/todo/todoSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    todos: todoReducer,
  },
})
