import Navbar from "./components/navbar/Navbar";
import TodoList from "./components/todo-list/TodoList";

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <TodoList />
      </main>
    </div>
  );
}

export default App;
