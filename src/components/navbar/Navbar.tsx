import React from "react";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = props => {
  return (
    <header>
      <nav>
        <ul>
          <li>My todos</li>
          <li>Account</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
