// apps/your-app/app/routes/index.tsx

import TodoInput from '../component/TodoInput';
import TodoList from '../component/TodoList';
import '../styles/tailwind.css';

export default function TodoApp() {
  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}
