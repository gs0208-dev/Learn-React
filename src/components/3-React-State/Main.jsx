import { useState } from "react"
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

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

/**
 * Challenge: clean up our code!
 * Let's make a couple new components to make things a
 * little cleaner. (Notice: I'm not suggesting what we
 * have now is bad or wrong. I'm mostly finding an excuse
 * to get in some hands-on practice 🙂)
 * 
 * 1. Move the entire recipe <section> into its own
 *    ClaudeRecipe component
 * 2. Move the list of ingredients <section> into its
 *    own IngredientsList component.
 * 
 * While you're considering how to structure things, consider
 * where state is, think about if it makes sense or not to
 * move it somewhere else, how you'll communicate between
 * the parent/child components, etc.
 * 
 * The app should function as it currently does when you're
 * done, so there will likely be some extra work to be done
 * beyond what I've listed above.
*/

export default function Main(){

  const [ ingredients, setIngredient] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"])
  const [recipeShown, setRecipeShown] = useState(false);



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
        <IngredientsList ingredients={ingredients} showRecipe={showRecipe} />
      }
      { recipeShown &&
        <ClaudeRecipe />  
      }
    </main>
  )
}