import React from "react";

const Header = ({ totalTasks }) => {
  return (
    <nav>
      <h1>Get Things Done!</h1>
      <span>{totalTasks} Tasks</span>
    </nav>
  );
};

export default Header;
