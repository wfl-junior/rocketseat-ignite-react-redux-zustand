import { describe, expect, it } from "vitest";
import { PlayerState, next, play, playerReducer } from "./player";

const exampleState: PlayerState = {
  isLoading: false,
  currentModuleIndex: 0,
  currentLessonIndex: 0,
  course: {
    id: "1",
    modules: [
      {
        id: "1",
        title: "Iniciando com React",
        lessons: [
          {
            id: "Jai8w6K_GnY",
            title: "CSS Modules",
            duration: "13:45",
          },
          {
            id: "w-DW4DhDfcw",
            title: "Estilização do Post",
            duration: "10:05",
          },
        ],
      },
      {
        id: "2",
        title: "Estrutura da aplicação",
        lessons: [
          {
            id: "gE48FQXRZ_o",
            title: "Componente: Comment",
            duration: "13:45",
          },
          {
            id: "Ng_Vk4tBl0g",
            title: "Responsividade",
            duration: "10:05",
          },
          {
            id: "h5JA3wfuW1k",
            title: "Interações no JSX",
            duration: "06:33",
          },
        ],
      },
    ],
  },
};

describe("Player redux slicer", () => {
  it("should be able to play", () => {
    const state = playerReducer(exampleState, play([1, 2]));

    expect(state.currentModuleIndex).toBe(1);
    expect(state.currentLessonIndex).toBe(2);
  });

  it("should be able to play next video automatically", () => {
    const state = playerReducer(exampleState, next());

    expect(state.currentModuleIndex).toBe(0);
    expect(state.currentLessonIndex).toBe(1);
  });

  it("should be able to jumb to next module automatically", () => {
    const state = playerReducer(
      {
        ...exampleState,
        currentLessonIndex: 1,
      },
      next(),
    );

    expect(state.currentModuleIndex).toBe(1);
    expect(state.currentLessonIndex).toBe(0);
  });

  it("should reset to first lesson from first module if next is called while playing the last lesson from the last module", () => {
    const state = playerReducer(
      {
        ...exampleState,
        currentModuleIndex: 1,
        currentLessonIndex: 2,
      },
      next(),
    );

    expect(state.currentModuleIndex).toBe(0);
    expect(state.currentLessonIndex).toBe(0);
  });
});
