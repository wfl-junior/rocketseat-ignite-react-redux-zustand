import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";

interface AppProps {}

export function App({}: AppProps): JSX.Element | null {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 p-6">
      <AddTodo />
      <TodoList />
    </div>
  );
}
