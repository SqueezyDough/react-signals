import React, { FormEvent, useState } from "react";
import { Todo } from "./TodoList.utils";
import { buttonNewTodo, checkbox, formTodos, listTodos, newTodoLabel } from "./TodoList.css";

type BasicTodoListProps = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  toggleTodo: (todo: Todo) => void;
};

const BasicTodoList: React.FC<BasicTodoListProps> = ({ todos, addTodo, toggleTodo }) => {
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
      <h2>Todos</h2>

      <form className={formTodos} onSubmit={handleSubmit}>
        <label className={newTodoLabel}>New todo</label>
        <input type="text" value={newTodoName} onChange={e => setNewTodoName(e.target.value)} />
        <button className={buttonNewTodo} type="submit">
          Add
        </button>
      </form>

      <ul role="list" className={listTodos}>
        {todos.map(todo => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                className={checkbox}
                onChange={e =>
                  toggleTodo({
                    id: todo.id,
                    completed: e.target.checked
                  })
                }
              />
              <span>{todo.name}</span>
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BasicTodoList;
