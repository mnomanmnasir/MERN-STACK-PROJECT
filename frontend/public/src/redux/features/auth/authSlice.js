import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser, userLogin, userRegister } from "./authAction";

const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const initialState = {
  loading: false,
  user: null,
  token: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // login user
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload) {
        const { user, token } = action.payload;
        state.user = user;
        state.token = token;
      } else {
        // Handle the case where action.payload is undefined
        state.error = "Unexpected response from server";
      }
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    // register user
    builder.addCase(userRegister.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userRegister.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload) {
        const { user } = action.payload;
        state.user = user;
      } else {
        // Handle the case where action.payload is undefined
        state.error = "Unexpected response from server";
      }
    });
    builder.addCase(userRegister.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    
       // current user
       builder.addCase(getCurrentUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(getCurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          const { user } = action.payload;
          state.user = user;
        } else {
          // Handle the case where action.payload is undefined
          state.error = "Unexpected response from server";
        }
      });
      builder.addCase(getCurrentUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice;
