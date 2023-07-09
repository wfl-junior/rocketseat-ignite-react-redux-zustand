import { useAppSelector } from "~/store";

interface TodoListProps {}

export function TodoList({}: TodoListProps): JSX.Element | null {
  const todos = useAppSelector(state => state.todos);

  if (todos.length === 0) {
    return <p className="text-sm mt-4">Insira algum todo...</p>;
  }

  return (
    <ul className="mt-4 ml-5 list-disc">
      {todos.map(todo => (
        <li key={todo.id} className="text-lg">
          {todo.text}
        </li>
      ))}
    </ul>
  );
}
