import React, { useRef } from 'react';

function Add({ recipe, setRecipe }) {
  const titleUseRef = useRef(null);
  const descriptionUseRef = useRef(null);

  const addRecipe = () => {
    let recipeObj = {};
    recipeObj.id = Math.floor(Date.now() / 1000);
    recipeObj.title = titleUseRef.current.value;
    recipeObj.description = descriptionUseRef.current.value;

    setRecipe([recipeObj, ...recipe]);
  };

  return (
    <div>
      <input type='text' placeholder='title' ref={titleUseRef} />
      <input placeholder='description' ref={descriptionUseRef} />
      <button onClick={addRecipe}>add</button>
      <button>cancel</button>
    </div>
  );
}

export default Add;
