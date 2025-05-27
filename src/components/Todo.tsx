import { useRef, useState } from "react";
import TodoItems from "./TodoItems";
import { MdReport } from "react-icons/md";

type Todo = {
  id: number;
  text: string;
  isComplete: boolean;
};

export default function Todo() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    const inputText = inputRef.current?.value.trim();

    if (!inputText) return;

    const newTodo: Todo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    setTodoList((prev) => [...prev, newTodo]);
    if (inputRef.current) inputRef.current.value = "";
  };

  const deleteTodo = (id: number) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <MdReport />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>

      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={addTodo}
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          ADD +
        </button>
      </div>

      <div>
        {todoList.map((item) => (
          <TodoItems key={item.id} {...item} onDelete={deleteTodo} />
        ))}
      </div>
    </div>
  );
}
