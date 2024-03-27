import "./app.css";
import Navbar from "./components/navbar/Navbar";
import { getTodos } from "./components/todo-list/TodoList.utils";
import Slider from "./components/slider/Slider";
import TodoList from "./components/todo-list/TodoList";
import { page } from "./app.css";
import { signal, computed } from "@preact/signals-react";

const todos = signal(getTodos());

const completedTodos = computed(() => {
  return todos.value.filter(todo => todo.completed).length || 0;
});

function App() {
  console.log("render App");

  return (
    <div className="App">
      <div className={page}>
        <Navbar completedTodos={completedTodos} />

        <main>
          <h1>Signals</h1>

          <Slider />

          <TodoList todos={todos} />
        </main>
      </div>
    </div>
  );
}

export default App;
