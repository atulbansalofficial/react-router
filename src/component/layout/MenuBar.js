import React from "react";
import { Link } from "react-router-dom";
function MenuBar() {
  return (
    <div>
      <Link exact="true" to="/">
        Home
      </Link>&nbsp;
      <Link exact="true" to="/about">
        About
      </Link>&nbsp;
      <Link exact="true" to="/contact">
        Contact
      </Link>&nbsp;
      <Link exact="true" to="/service">
        Service
      </Link>&nbsp;
      <hr />
    </div>
  );
}

export default MenuBar;
