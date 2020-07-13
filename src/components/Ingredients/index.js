import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const Ingredients = ({ list }) => (
  <div className="ingredients">
    <ul>
      {list.map((ingredientObject) => (
        <li className="ingredient">
          <span className="ingredient-quantity">
            {ingredientObject.quantity} {ingredientObject.unit}
          </span>
          {ingredientObject.name}
        </li>
      ))}
    </ul>
  </div>
);

Ingredients.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Ingredients;
