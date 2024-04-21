import React, { FormEvent, useState } from "react";
import styles from "./TodoList.module.scss";
import { Signal, effect } from "@preact/signals-react";
import { Todo, removeTodo, saveTodos } from "../../store/todos";

type SignalsTodoListProps = {
  todos: Signal<Todo[]>;
};

const SignalsTodoList: React.FC<SignalsTodoListProps> = ({ todos }) => {
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
    saveTodos(todos);
  });

  return (
    <>
      <h2>Todos</h2>

      <form className={styles.formTodos} onSubmit={addTodo}>
        <label className={styles.newTodoLabel}>New todo</label>
        <input type="text" value={newTodoName} onChange={e => setNewTodoName(e.target.value)} />
        <button className={styles.buttonNewTodo} type="submit">
          Add
        </button>
      </form>

      <ul className={styles.listTodos} role="list">
        {todos.value.map(todo => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                className={styles.checkbox}
                onChange={e =>
                  toggleTodo({
                    id: todo.id,
                    completed: e.target.checked
                  })
                }
              />

              <span>{todo.name}</span>

              <button type="button" onClick={() => removeTodo(todo.id)}>
                Remove
              </button>
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SignalsTodoList;
