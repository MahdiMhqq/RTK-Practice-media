import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, addUser, removeUser } from "store/thunks/users";
import { IUsersStore } from "store/types";

const usersStoreInitial: IUsersStore = {
  data: [],
  error: null,
  loading: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState: usersStoreInitial,
  reducers: {},
  extraReducers(builder) {
    // fetchUsers
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      });

    //add user
    builder
      .addCase(addUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data.push(action.payload);
      });

    //remove user
    builder
      .addCase(removeUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(removeUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = state.data.filter((user) => user.id !== action.payload);
      });
  },
});

export default usersSlice.reducer;
