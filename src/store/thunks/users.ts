import { createAsyncThunk } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";
import API from "api";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const res = await API.get("/users");
  return res.data;
});

const addUser = createAsyncThunk("users/add", async () => {
  const res = await API.post("/users", {
    name: faker.name.fullName(),
  });

  return res.data;
});

const removeUser = createAsyncThunk("users/remove", async (id: number) => {
  await API.delete(`/users/${id}`);

  return id;
});

export { fetchUsers, addUser, removeUser };
