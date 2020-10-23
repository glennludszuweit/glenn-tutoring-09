import React from 'react';

function Recipe({ recipe, setRecipe, currentRecipe, index }) {
  const deleteRecipe = () => {
    recipe.splice(index, 1);
    setRecipe([...recipe]);
  };

  return (
    <div>
      <h1>{currentRecipe.title}</h1>
      <h2>{currentRecipe.description}</h2>
      <a className='btn' href={`#edit/${currentRecipe.id}`}>
        edit
      </a>
      <a href='/' className='btn' onClick={deleteRecipe}>
        delete
      </a>
    </div>
  );
}

export default Recipe;
