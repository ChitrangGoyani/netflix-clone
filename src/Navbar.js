import React, { useState, useEffect } from "react";
import "./Navbar.css";
function Navbar() {
  const [show, handleShow] = useState(false);
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div class={`nav ${show && "nav__black"}`}>
      {" "}
      {/*only render the nav__black if show variable is true */}
      <div class="nav__contents">
        <img
          className="nav__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="not available"
        />
        <img
          className="nav__avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Navbar;
