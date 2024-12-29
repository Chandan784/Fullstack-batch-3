import { createSlice } from "@reduxjs/toolkit";

import { getAllUser } from "../api/user";

export let user = createSlice({
  name: "user",
  initialState: {
    loading: false,
    data: [],
    error: "",
    oneElementData: null,
  },
  reducers: {
    getAllUser: (state, action) => {
      state.data = action.payload;
    },
    getSingleUser: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      // GET ALL BLOG INFO
      .addCase(getAllUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = "";
      })
      .addCase(getAllUser.rejected, (state) => {
        state.loading = false;
        state.data = [];
        state.error =
          "Something went wrong"; /* You can put error message from backend as well*/
      });
  },
});

export let { getAllUser, getSingleUser } = user.actions;
export default user.reducer;
