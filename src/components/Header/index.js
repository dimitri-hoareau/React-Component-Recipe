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

// on DOIT écrire propTypes exactement comme ça
// On lui assigne un objet
// Cet objet doit avoir une propriété par prop attendu
// name est attentendu dans l'objet props
// ALORS name doit être une propriété de l'objet propTypes
// Pour chaque prop attendu, décrire les ou les types
// de données correspondant aux props.
Header.propTypes = {
  title: PropTypes.string.isRequired, // Je veux une string, elle est requise
  author: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default Header;
