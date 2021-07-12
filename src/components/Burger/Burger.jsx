import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

function Burger({ingredients}) {

  let transformedIngredients = ingredients ? 
  Object.keys(ingredients).map((key) => {
    let arr = [];
    for(let i = 0; i < ingredients[key]; i++){
      arr.push(<BurgerIngredient type={key} key={key + i} />)
    }
    return arr;
  }) : null
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      { 
        transformedIngredients
        .reduce((sum, el)=> sum += el.length, 0) ? transformedIngredients : <p>start select ingredients!</p>
      }
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default Burger;
