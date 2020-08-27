import React from "react";

function Header() {
  return (
    <>
      <div>
        {/* As a heading */}
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Flight Search</span>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
