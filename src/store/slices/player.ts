import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "~/lib/axios";
import type { Course } from "~/types/Course";

export interface PlayerState {
  course: Course | null;
  currentModuleIndex: number;
  currentLessonIndex: number;
}

const initialState: PlayerState = {
  course: null,
  currentModuleIndex: 0,
  currentLessonIndex: 0,
};

export const loadCourse = createAsyncThunk("player/load", async () => {
  const { data } = await api.get<Course>("/courses/1");
  return data;
});

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    play: (state, action: PayloadAction<[number, number]>) => {
      state.currentModuleIndex = action.payload[0];
      state.currentLessonIndex = action.payload[1];
    },
    next: state => {
      let nextLessonIndex = state.currentLessonIndex + 1;

      if (
        state.course &&
        nextLessonIndex >=
          state.course.modules[state.currentModuleIndex].lessons.length
      ) {
        nextLessonIndex = 0;
        let nextModuleIndex = state.currentModuleIndex + 1;

        if (nextModuleIndex >= state.course.modules.length) {
          nextModuleIndex = 0;
        }

        state.currentModuleIndex = nextModuleIndex;
      }

      state.currentLessonIndex = nextLessonIndex;
    },
  },
  extraReducers(builder) {
    builder.addCase(
      loadCourse.fulfilled,
      (state, action: PayloadAction<Course>) => {
        state.course = action.payload;
      },
    );
  },
});

export const playerReducer = playerSlice.reducer;
export const { play, next } = playerSlice.actions;
