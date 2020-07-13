import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Header = (props) => {
  console.log(props);
  const { title, author, difficulty, thumbnail } = props;
  return (
    <header className="header">
      <img src={thumbnail} alt="Lorem ipsum" className="header-image" />
      <div className="header-content">
        <h1 className="header-title">{title}</h1>
        <p className="header-infos">
          {author} - {difficulty}
        </p>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default Header;
