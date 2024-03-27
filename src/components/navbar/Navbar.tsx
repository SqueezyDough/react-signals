import React from "react";
import type { Todo } from "../todo-list/TodoList.utils";
import { header, link, menu, nav, todosCount } from "./Navbar.css";

type NavbarProps = {
  todos?: Todo[];
};

const Navbar: React.FC<NavbarProps> = ({ todos }) => {
  console.log("render Navbar");

  const completedTodos = todos?.filter(todo => todo.completed).length || 0;

  return (
    <header className={header}>
      <nav className={nav}>
        <ul className={menu}>
          <li>
            <a className={link} href="">
              <span>My todos </span>

              {completedTodos > 0 && <div className={todosCount}>✅ &nbsp; {completedTodos}</div>}
            </a>
          </li>

          <li>
            <a className={link} href="">
              Not my todos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
