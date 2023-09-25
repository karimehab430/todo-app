import React from "react";

const Footer = ({ year = 2023 }) => {
  return (
    <div>
      <footer>Developed and maintained by Karim Ehab - {year}</footer>;
    </div>
  );
};

export default Footer;
