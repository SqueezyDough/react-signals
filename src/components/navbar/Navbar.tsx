import React from "react";
import { Todo } from "../todo-list/TodoList.utils";

type NavbarProps = {
  todos?: Todo[];
};

const Navbar: React.FC<NavbarProps> = ({ todos }) => {
  console.log("render Navbar", todos);

  const completedTodos = todos?.filter(todo => todo.completed).length || 0;

  return (
    <header>
      <nav>
        <ul>
          <li>
            <span>My todos </span>

            {completedTodos > 0 && <span>Completed: {completedTodos}</span>}
          </li>

          <li>Account</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
