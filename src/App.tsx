import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { Todo, getTodos, saveTodos } from "./components/todo-list/TodoList.utils";
import Slider from "./components/slider/Slider";
import BasicTodoList from "./components/todo-list/BasicTodoList";
import SignalsTodoList from "./components/todo-list/SignalsTodoList";

// const todos = signal(getTodos());

// export const completedTodos = computed(() => {
//   return todos.value.filter(todo => todo.completed).length || 0;
// });

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
        {/* <SignalsTodoList /> */}

        <BasicTodoList addTodo={addTodo} toggleTodo={toggleTodo} todos={todos} />
      </main>
    </div>
  );
}

export default App;
