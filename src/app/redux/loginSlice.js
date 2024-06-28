import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../config/constants";
// Define the initial state
const initialState = {
  email: "",
  password: "",
  loading: false,
  error: null,
  success: false,

  // remember: false,
};

// Define the thunk action creator
export const loginUserData = createAsyncThunk(
  "loginUserData",
  async ({ email, password, remember }, { rejectWithValue }) => {

    // Frontend validation
    if (!email || !password) {
      return rejectWithValue('Email and password are required');
    }

    try {
      const formData = { email, password, remember };
      let response = await axios.post(
        `${API_BASE_URL}login`,
        formData
      );
      console.log(response);
      if (response.data.message === "success") {
        return response.data;
      } else {
        console.log(response)
        return rejectWithValue(response.data.message);
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.errorMessage);
    }
  }
);

// Define the slice
const Slice = createSlice({
  name: "login",
  initialState,
  reducers: {
    handleChange: (state, action) => {
      const { name, type, value, checked } = action.payload;
      let newState = {
        ...state,
        [name]: type === "checkbox" ? checked : value,
      };
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(loginUserData.fulfilled, (state) => {
        state.loading = true;
        state.success = true;
        /* if (state.success) {
          state.error = null;
          state.email = "";
          state.password = "";  
        } */
      })
      .addCase(loginUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { handleChange } = Slice.actions;
export default Slice.reducer;
