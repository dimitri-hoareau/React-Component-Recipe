import React from "react";
import Header from "../Header";
import Ingredients from "../Ingredients";
import Etapes from "../Etapes";

import "./style.scss";

const Recipe = () => (
  <div className="recipe">
    <Header />
    <Ingredients />
    <Etapes />
  </div>
);

export default Recipe;
