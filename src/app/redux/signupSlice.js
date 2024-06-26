import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_BASE_URL } from '../config/constants'

const initialState = {
  fullName: '',
  email: '',
  password: '',
  loading: false,
  error: null,
  success: false,
}

export const signupUser = createAsyncThunk(
  'signup/signupUser',
  async ({ fullName, email, password }, { rejectWithValue }) => {

    // Frontend validation
    if (!fullName || !email || !password) {
      return rejectWithValue('All fields are required');
    }

    try {
      const response = await axios.post(
        `${API_BASE_URL}register`,
        { fullName, email, password }
      )
      console.log(response.data.data)
      if (response.data.message === 'success') {
        return response.data
      } else {
        return rejectWithValue('Signup failed')
      }
    } catch (error) {
      console.log(error.response.data.errorMessage)
      return rejectWithValue(error.response.data.errorMessage)
    }
  },
)

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    updateField(state, action) {
      const { field, value } = action.payload
      state[field] = value
    },
    resetSignup(state) {
      return initialState
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true
        state.error = null
        state.success = false
      })
      .addCase(signupUser.fulfilled, (state) => {
        state.loading = false
        state.success = true
        if (state.success) {
          state.error = null
          state.fullName = ''
          state.email = ''
          state.password = ''
        }
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        state.success = false
      })
  },
})

export const { updateField, resetSignup } = signupSlice.actions

export default signupSlice.reducer
