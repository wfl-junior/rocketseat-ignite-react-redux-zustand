import { useSelector } from "react-redux";

interface TodoListProps {}

export function TodoList({}: TodoListProps): JSX.Element | null {
  const todos = useSelector(state => state.todos);

  console.log(todos);

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
}
