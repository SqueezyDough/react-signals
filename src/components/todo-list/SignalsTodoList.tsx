import React, { FormEvent, useState } from "react";
import { Todo } from "./TodoList.utils";
import { todoList } from "./TodoList.css";

type SignalsTodoListProps = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  toggleTodo: (todo: Todo) => void;
  // Define the props for your component here
};

const SignalsTodoList: React.FC<SignalsTodoListProps> = ({ todos, addTodo, toggleTodo }) => {
  console.log("render Signals TodoList");

  const [newTodoName, setNewTodoName] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    addTodo({
      id: crypto.randomUUID(),
      name: newTodoName,
      completed: false
    });

    setNewTodoName("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>New Task</label>
        <input type="text" value={newTodoName} onChange={e => setNewTodoName(e.target.value)} />
        <button type="submit">Add</button>
      </form>

      <ul role="list" className={todoList}>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={e =>
                toggleTodo({
                  id: todo.id,
                  completed: e.target.checked
                })
              }
            />
            <span>{todo.name}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SignalsTodoList;
