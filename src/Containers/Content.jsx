import React from 'react';
import Home from '../Components/Home';
import Add from '../Components/Add';
import Edit from '../Components/Edit';
import Recipe from '../Components/Recipe';

function Content({ recipe, setRecipe, hash }) {
  const id = hash.slice(1);
  const index = recipe.findIndex((item) => item.id === +id);
  const currentRecipe = recipe[index];

  return (
    <div>
      <h1>CONTENT</h1>
      {hash === '#add' ? (
        <Add recipe={recipe} setRecipe={setRecipe} />
      ) : hash.match('#edit') ? (
        <Edit recipe={recipe} setRecipe={setRecipe} hash={hash} />
      ) : (index && index !== -1) || index === 0 ? (
        <Recipe
          recipe={recipe}
          setRecipe={setRecipe}
          hash={hash}
          currentRecipe={currentRecipe}
          index={index}
        />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default Content;
