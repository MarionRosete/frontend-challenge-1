import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../state/todoState';

export default function TodoInput() {
  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const addTodo = () => {
    if (!input.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
    setInput('');
  };


  return (
    <div className="flex gap-2 mt-4">
      <input
        className="border p-2 flex-grow rounded"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addTodo}>
        Add
      </button>
    </div>
  );
}
