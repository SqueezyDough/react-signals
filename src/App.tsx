import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { Todo, getTodos, saveTodos } from "./components/todo-list/TodoList.utils";
import Slider from "./components/slider/Slider";
import SignalsTodoList from "./components/todo-list/SignalsTodoList";
import ReactTodoList from "./components/todo-list/ReactTodoList";

function App() {
  console.log("render App");

  const [todos, setTodos] = useState(getTodos());

  const addTodo = ({ name }: Todo) => {
    setTodos(prevTodos => {
      return [
        ...prevTodos,
        {
          id: crypto.randomUUID(),
          name,
          completed: false
        }
      ];
    });
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
    <div className="App">
      <Navbar todos={todos} />

      <Slider />

      <main>
        <ReactTodoList />
        <SignalsTodoList addTodo={addTodo} toggleTodo={toggleTodo} todos={todos} />
      </main>
    </div>
  );
}

export default App;
