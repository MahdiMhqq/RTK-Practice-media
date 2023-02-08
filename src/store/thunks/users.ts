import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "api";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const res = await API.get("/users");
  return res.data;
});

export { fetchUsers };
