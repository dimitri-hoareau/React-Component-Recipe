import React from "react";
import "./style.scss";

const Header = () => (
  <header className="header">
    <img
      src="https://images.pexels.com/photos/53483/strawberries-crepe-dessert-sweet-53483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      alt="Lorem ipsum"
      className="header-image"
    />
    <div className="header-content">
      <h1 className="header-title">Lorem ipsum</h1>
      <p className="header-infos">
        Lorem - Ipsum
      </p>
    </div>
  </header>
);

export default Header;
