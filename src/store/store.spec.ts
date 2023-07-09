import { beforeEach, describe, expect, it } from "vitest";
import { useStore } from ".";

const exampleState = useStore.getState();
exampleState.course = {
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
};

describe("Zustand store", () => {
  beforeEach(() => {
    useStore.setState(exampleState);
  });

  it("should start at first lesson of first module", () => {
    const { currentModuleIndex, currentLessonIndex } = useStore.getState();

    expect(currentModuleIndex).toBe(0);
    expect(currentLessonIndex).toBe(0);
  });

  it("should be able to play", () => {
    const { play, currentModuleIndex, currentLessonIndex } =
      useStore.getState();

    expect(currentModuleIndex).toBe(0);
    expect(currentLessonIndex).toBe(0);

    play([1, 2]);

    const state = useStore.getState();

    expect(state.currentModuleIndex).toBe(1);
    expect(state.currentLessonIndex).toBe(2);
  });

  it("should be able to play next video automatically", () => {
    const { next, currentModuleIndex, currentLessonIndex } =
      useStore.getState();

    expect(currentModuleIndex).toBe(0);
    expect(currentLessonIndex).toBe(0);

    next();

    const state = useStore.getState();

    expect(state.currentModuleIndex).toBe(0);
    expect(state.currentLessonIndex).toBe(1);
  });

  it("should be able to jumb to next module automatically", () => {
    useStore.setState({
      currentLessonIndex: 1,
    });

    const { next } = useStore.getState();

    next();

    const state = useStore.getState();

    expect(state.currentModuleIndex).toBe(1);
    expect(state.currentLessonIndex).toBe(0);
  });

  it("should reset to first lesson from first module if next is called while playing the last lesson from the last module", () => {
    useStore.setState({
      currentModuleIndex: 1,
      currentLessonIndex: 2,
    });

    const { next } = useStore.getState();

    next();

    const state = useStore.getState();

    expect(state.currentModuleIndex).toBe(0);
    expect(state.currentLessonIndex).toBe(0);
  });
});
