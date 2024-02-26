import React from "react";

function Footing() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p> Copyright © {currentYear} </p>
    </footer>
  );
}
export default Footing;
