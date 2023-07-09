import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { Todo } from "~/types/Todo";

const todosSlice = createSlice({
  name: "todos",
  initialState: [] as Todo[],
  reducers: {
    addTodo: (todos, action: PayloadAction<{ newTodo: Todo }>) => {
      todos.push(action.payload.newTodo);
    },
  },
});

export const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const { addTodo } = todosSlice.actions;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
