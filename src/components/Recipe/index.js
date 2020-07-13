import React from "react";
import Header from "../Header";
import Ingredients from "../Ingredients";
import Etapes from "../Etapes";

import "./style.scss";

const Recipe = () => (
  <div className="recipe">
    <Header
      title="Dorian is a..."
      difficulty="Facile"
      author="Dorian"
      thumbnail="https://www.influencia.net/data/classes/actualite/actu_7920_image2012rectangle_petite.jpg"
    />
    <Ingredients />
    <Etapes />
  </div>
);

export default Recipe;
