import React from "react";
import styles from "./Navbar.module.scss";
import { Signal } from "@preact/signals-react";

type NavbarProps = {
  completedTodos: Signal<number>;
};

const Navbar: React.FC<NavbarProps> = ({ completedTodos }) => {
  console.log("render Navbar");

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li>
            <a className={styles.link} href="">
              <span>My todos </span>

              {completedTodos.value > 0 && (
                <div className={styles.todosCount}>✅ &nbsp; {completedTodos}</div>
              )}
            </a>
          </li>

          <li>
            <a className={styles.link} href="">
              Not my todos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
