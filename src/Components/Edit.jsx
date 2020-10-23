import React, { useRef } from 'react';

function Add({ recipe, setRecipe, hash }) {
  const id = hash.split('/')[1];
  const index = recipe.findIndex((item) => item.id === +id);
  const currentRecipe = recipe[index];

  const titleUseRef = useRef(null);
  const descriptionUseRef = useRef(null);

  const updateRecipe = () => {
    currentRecipe.title = titleUseRef.current.value;
    currentRecipe.description = descriptionUseRef.current.value;

    setRecipe([...recipe]);
  };

  return (
    <div>
      <input
        type='text'
        placeholder='title'
        ref={titleUseRef}
        defaultValue={currentRecipe.title}
      />
      <input
        placeholder='description'
        ref={descriptionUseRef}
        defaultValue={currentRecipe.description}
      />
      <button onClick={updateRecipe}>update</button>
      <button>cancel</button>
    </div>
  );
}

export default Add;
