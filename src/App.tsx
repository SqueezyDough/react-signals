import Navbar from "./components/navbar/Navbar";
import TodoList from "./components/todo-list/TodoList";
import { completedTodos, todos } from "./store/todos";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <div className="page">
        <Navbar completedTodos={completedTodos} />
        <main>
          <h1>Signals</h1>

          <p>Test</p>

          <TodoList todos={todos} />
        </main>
      </div>
    </div>
  );
}

export default App;
