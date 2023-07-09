import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: ["Fazer nescau", "Estudar Zustand"],
  reducers: {},
});

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});
