import { FormEvent, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "~/store";

interface AddTodoProps {}

export function AddTodo({}: AddTodoProps): JSX.Element | null {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  function handleAddNewTodo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const input = inputRef.current!;

    dispatch(
      addTodo({
        newTodo: {
          id: Date.now().toString(),
          text: input.value,
        },
      }),
    );

    input.value = "";
  }

  return (
    <form onSubmit={handleAddNewTodo} className="flex items-center gap-4">
      <input
        ref={inputRef}
        required
        type="text"
        placeholder="Novo to-do"
        className="rounded bg-zinc-800 px-4 py-2 text-white focus:outline-none border-2 border-zinc-700 focus:border-indigo-600"
      />

      <button
        type="submit"
        className="text-white bg-indigo-600 hover:bg-indigo-700 transition-colors rounded-md py-2.5 px-4"
      >
        Adicionar
      </button>
    </form>
  );
}
