

/**
 * Review Challenge:
 * Map over the list of ingredients and render them as list items
 * 
 * Note: We're doing things a weird way here. Don't worry,
 * we're building up to learning the right way 🙂
*/

import { useState } from "react"

/**
 * Challenge:
 * Add an `onSubmit` event listener on the form. Have the function
 * simply console.log("Form submitted!") for now
*/

/**
 * Challenge:
 * Add the new ingredient to the array of ingredients. Also, add a 
 * console.log(ingredients) after adding the ingredient, because 
 * **warning**: you aren't going to see the page update!
 * 
 * Hint: this is a one-liner solution, so don't overthink it 😅
*/

/**
 * Challenge: Update our app so that when the user enters a
 * new ingredient and submits the form, it adds that new
 * ingredient to our list!
*/

export default function Main(){

  const [ ingredients, setIngredient] = useState([])

  const ingredientsListItems = ingredients.map((list) => {
    return (
      <li key={list}>
        {list}
      </li>
    )
  })

  function handleSubmit(event){
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient");
    setIngredient(prev => [...prev, newIngredient])
  }

  return (
    <main className="rs-main">
      <form className="rs-form" action="" onSubmit={handleSubmit}>
        <input name="ingredient" className="border-2" type="text" placeholder="e.g. oregano" aria-label="Add ingredient"/>
        <button>+ Add ingredient</button>
      </form>
      <ul>
        {ingredientsListItems}
      </ul>
    </main>
  )
}