import { FormEvent } from "react";

interface AddTodoProps {}

export function AddTodo({}: AddTodoProps): JSX.Element | null {
  function handleAddNewTodo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData.get("newTodo"));
  }

  return (
    <form onSubmit={handleAddNewTodo}>
      <input name="newTodo" type="text" placeholder="Novo to-do" />
      <button type="submit">Adicionar</button>
    </form>
  );
}
