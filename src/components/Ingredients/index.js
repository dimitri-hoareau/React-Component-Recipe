import React from "react";

import "./style.scss";

const Ingredients = () => (
  <div className="ingredients">
    <ul>
      <li className="ingredient">
        <span className="ingredient-quantity">375 g</span>
        de farine comestible
      </li>
      <li className="ingredient">
        <span className="ingredient-quantity">2 unités</span>
        de licorne en poudre
      </li>
      <li className="ingredient">
        <span className="ingredient-quantity">3 onces</span>
        de bon sens
      </li>
    </ul>
  </div>
);
export default Ingredients;
