import React from 'react'
import Recipe from './Recipe'

function Recipelist(props){

    return(
      <div className='table-container'>
        <div className='fridge-header'>
          <p id='recipe-c'>Recipe</p>
          <p id='ingredient-c'>Ingredients</p>
          <p id='have-c'>You have:</p>
          <p id='buttons-c'>
          </p>
        </div>
        <div className='list-container'>
          {props.recipes.map((recipe, i) => {
            return(
              <Recipe 
                key={i}
                id={i}
                items={props.items}
                recipe={recipe.recipe}
                ing={recipe.ingredients}
                updateRecipeFn={props.updateRecipeFn}
                deleteRecipeFn={props.deleteRecipeFn}
              />
            )
          })}
        </div>
        <div className='fridge-footer'></div>
    </div>
    )
  }


export default Recipelist