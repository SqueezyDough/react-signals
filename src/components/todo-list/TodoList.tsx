import React, { FormEvent, useState } from "react";
import { Todo, saveTodos } from "./TodoList.utils";
import { buttonNewTodo, checkbox, formTodos, listTodos, newTodoLabel } from "./TodoList.css";
import { Signal, effect } from "@preact/signals-react";

type SignalsTodoListProps = {
  todos: Signal<Todo[]>;
};

const SignalsTodoList: React.FC<SignalsTodoListProps> = ({ todos }) => {
  console.log("render TodoList");

  const [newTodoName, setNewTodoName] = useState("");

  const addTodo = (e: FormEvent) => {
    e.preventDefault();

    todos.value = [
      ...todos.value,
      {
        id: crypto.randomUUID(),
        name: newTodoName,
        completed: false
      }
    ];
    setNewTodoName("");
  };

  const toggleTodo = ({ id, completed }: Todo) => {
    todos.value = todos.value.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed };
      }

      return todo;
    });
  };

  effect(() => {
    saveTodos(todos.value);
  });

  return (
    <>
      <h2>Todos</h2>

      <form className={formTodos} onSubmit={addTodo}>
        <label className={newTodoLabel}>New todo</label>
        <input type="text" value={newTodoName} onChange={e => setNewTodoName(e.target.value)} />
        <button className={buttonNewTodo} type="submit">
          Add
        </button>
      </form>

      <ul className={listTodos} role="list">
        {todos.value.map(todo => (
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

export default SignalsTodoList;
