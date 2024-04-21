import "./app.css";
import Navbar from "./components/navbar/Navbar";
import TodoList from "./components/todo-list/TodoList";
import { page } from "./app.scss";
import { completedTodos, todos } from "./store/todos";

function App() {
  return (
    <div className="app">
      <div className="page">
        <Navbar completedTodos={completedTodos} />
        <main>
          <h1>Signals</h1>

          <TodoList todos={todos} />
        </main>
      </div>
    </div>
  );
}

export default App;
