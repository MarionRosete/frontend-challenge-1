import { Todo, todoListState } from '../state/todoState';
import { useRecoilState } from 'recoil';


export default function TodoItem({ item }: { item: Todo }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const toggleComplete = () => {
    const updated = todoList.map(todo =>
      todo.id === item.id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodoList(updated);
  };

  const deleteItem = () => {
    setTodoList(todoList.filter(todo => todo.id !== item.id));
  };

  return (
    <div className={`flex justify-between items-center p-2 border-b transition-colors duration-2000 ${
      item.completed ? 'bg-green-100' : 'bg-white'
    }`}>
      <input
        className={`${item.completed ? 'bg-green-600' : 'bg-white'} accent-green-600 rounded`}
        type='checkbox'
        onChange={toggleComplete}
        checked={item.completed}
      />
      <span>
        {item.text}  {item.completed ?"🎉":"⏳"}
      </span>
      <button onClick={deleteItem} className="text-red-500">
        X
      </button>
    </div>
  );
}
