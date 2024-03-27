import React, { FormEvent, useEffect, useState } from "react";
import { Todo, getTodos, saveTodos } from "./TodoList.utils";
import { buttonNewTodo, checkbox, formTodos, listTodos, newTodoLabel } from "./TodoList.css";

type SignalsTodoListProps = {
  // Define the props for your component here
};

const SignalsTodoList: React.FC<SignalsTodoListProps> = () => {
  console.log("render React TodoList");

  const [todos, setTodos] = useState(getTodos());
  const [newTodoName, setNewTodoName] = useState("");

  const addTodo = (e: FormEvent) => {
    e.preventDefault();

    setTodos(prevTodos => {
      return [
        ...prevTodos,
        {
          id: crypto.randomUUID(),
          name: newTodoName,
          completed: false
        }
      ];
    });

    setNewTodoName("");
  };

  const toggleTodo = ({ id, completed }: Todo) => {
    setTodos(prevTodo => {
      return prevTodo.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  };

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

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

export default SignalsTodoList;
