import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const Etapes = ({ list }) => (
  <ul className="steps">
    {list.map((elemString, index) => (
      <li key={"etape" + index} className="step">
        {elemString}
      </li>
    ))}
  </ul>
);

Etapes.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Etapes;
