import React from "react";
import Header from "../Header";
import Ingredients from "../Ingredients";
import Etapes from "../Etapes";

import "./style.scss";

import data from "../../data/recipe";

const Recipe = () => (
  <div className="recipe">
    <Header {...data} />
    <Ingredients />
    <Etapes list={data.instructions} />
  </div>
);

export default Recipe;

{
  /* <Header
      title={data.title}
      difficulty={data.difficulty}
      author={data.author}
      thumbnail={data.thumbnail}
      instruction: ['']
      ingredients={[{}, {}]}
    /> */
}
