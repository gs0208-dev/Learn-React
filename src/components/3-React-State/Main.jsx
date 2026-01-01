import { useState } from "react"

/**
 * Review Challenge:
 * Map over the list of ingredients and render them as list items
 * 
 * Note: We're doing things a weird way here. Don't worry,
 * we're building up to learning the right way 🙂
*/

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

/**
 * Challenge: use form action instead of onSubmit to
 * handle the data from the form
*/

/**
 * Challenge:
 * Using conditional rendering, only render the new <section> IF
 * there are ingredients added to the list of ingredients.
*/

/**
 * Challenge:
 * Only display the div.get-recipe-container if the ingredients list
 * has more than 3 items in it. (Fewer than that and it might not
 * give great results from the chef 🤖👩‍🍳)
*/

/**
 * Challenge:
 * 1. Create a boolean state that, for now, will represent whether
 *    we've gotten a recipe back from the "chef". Default to `false`.
 *    Can call it `recipeShown`.
 * 2. Grab the markup in recipeCode.md and paste it below. This will
 *    be a placeholder for the content that will come back from the 
 *    chef once we set up that feature.
 * 3. When the user clicks the "Get a recipe" button, flip the
 *    `recipeShown` state to true.
 * 4. Only display the recipe code content if `recipeShown` is true.
*/

export default function Main(){

  const [ ingredients, setIngredient] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"])
  const [recipeShown, setRecipeShown] = useState(false);

  const ingredientsListItems = ingredients.map((list) => {
    return (
      <li key={list}>
        {list}
      </li>
    )
  })

  function formAction(formData){
    const newIngredient = formData.get("ingredient");
    setIngredient(prev => [...prev, newIngredient])
  }

  function showRecipe(){
    setRecipeShown(prev => !prev)
  }
  

  return (
    <main className="rs-main">
      <form className="rs-form" action={formAction}>
        <input name="ingredient" className="border-2" type="text" placeholder="e.g. oregano" aria-label="Add ingredient"/>
        <button>+ Add ingredient</button>
      </form>
      { ingredients.length >= 1 && 
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
            { ingredients.length > 3 &&
            <div className="get-recipe-container">
              <div>
                <h3>Ready for a recipe?</h3> 
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button onClick={showRecipe}>Get a recipe</button>
            </div>}
        </section>
      }
      { recipeShown &&
        <section>
          <h2>Chef Claude Recommends:</h2>
          <article className="suggested-recipe-container" aria-live="polite">
            <p>Based on the ingredients you have available, I would recommend making a simple a delicious <strong>Beef Bolognese Pasta</strong>. Here is the recipe:</p>
            <h3>Beef Bolognese Pasta</h3>
            <strong>Ingredients:</strong>
            <ul>
              <li>1 lb. ground beef</li>
              <li>1 onion, diced</li>
              <li>3 cloves garlic, minced</li>
              <li>2 tablespoons tomato paste</li>
              <li>1 (28 oz) can crushed tomatoes</li>
              <li>1 cup beef broth</li>
              <li>1 teaspoon dried oregano</li>
              <li>1 teaspoon dried basil</li>
              <li>Salt and pepper to taste</li>
              <li>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
            </ul>
            <strong>Instructions:</strong>
            <ol>
              <li>Bring a large pot of salted water to a boil for the pasta.</li>
              <li>In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.</li>
              <li>Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is translucent.</li>
              <li>Stir in the tomato paste and cook for 1 minute.</li>
              <li>Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.</li>
              <li>Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the flavors to meld.</li>
              <li>While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and return it to the pot.</li>
              <li>Add the Bolognese sauce to the cooked pasta and toss to combine.</li>
              <li>Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.</li>
            </ol>
        </article>
      </section> 
      }
    </main>
  )
}