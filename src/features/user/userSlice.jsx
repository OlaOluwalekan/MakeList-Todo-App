import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const user = JSON.parse(sessionStorage.getItem('response')) || ''

const initialState = {
  isLoading: false,
  response: '',
  // user,
}

export const loginUser = createAsyncThunk('user/loginUser', async (user) => {
  try {
    const { data } = await axios.post(
      'https://ola-todo-app.cyclic.app/api/v1/auth/login',
      user,
      { withCredentials: true }
    )
    console.log(data)
    sessionStorage.setItem('user', JSON.stringify(data.user))
    return data
  } catch (error) {
    console.log(error)
  }
})

export const logoutUser = createAsyncThunk('user/logoutUser', async () => {
  try {
    const { data } = await axios.get(
      'https://ola-todo-app.cyclic.app/api/v1/auth/logout',
      { withCredentials: true }
    )
    // console.log('hello')
    console.log(data)
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('todoData')
    return data
  } catch (error) {
    console.log(error)
  }
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.response = action.payload
      })
      .addCase(loginUser.rejected, (state, action) => {
        console.log(action)
        state.isLoading = false
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.response = action.payload
      })
  },
})

export default userSlice.reducer
