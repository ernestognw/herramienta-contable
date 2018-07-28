import React from "react";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container">
        <div className="navbar-translate">
          <a className="navbar-brand">
            { props.title }
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
