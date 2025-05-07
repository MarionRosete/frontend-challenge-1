import { useRecoilValue } from 'recoil';
import { todoListState } from '../state/todoState';
import TodoItem from './TodoItem';

export default function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <div className="mt-4">
      {todoList.map((todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </div>
  );
}
