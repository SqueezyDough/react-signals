import React from "react";
import { header, link, menu, nav, todosCount } from "./Navbar.css";
import { Signal } from "@preact/signals-react";

type NavbarProps = {
  completedTodos: Signal<number>;
};

const Navbar: React.FC<NavbarProps> = ({ completedTodos }) => {
  console.log("render Navbar");

  return (
    <header className={header}>
      <nav className={nav}>
        <ul className={menu}>
          <li>
            <a className={link} href="">
              <span>My todos </span>

              {completedTodos.value > 0 && (
                <div className={todosCount}>✅ &nbsp; {completedTodos}</div>
              )}
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
