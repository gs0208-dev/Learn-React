import { useState } from "react"


/**
 * Challenge: create a page that displays your favorite jokes
 * - Create a Joke component in its own file.
 * - Import and render 4-5 <Joke /> components
 * - Each Joke should receive a "setup" prop and a "punchline" prop
 *   and render those however you'd like
 * - Use your favorite 2-part jokes (setup & punchline), or check
 *   jokes.md file for some examples.
 * 
 * EXTRA CREDIT:
 * Some jokes are only a punchline with no setup:
 * 
 * E.g.: "It’s hard to explain puns to kleptomaniacs because 
 * they always take things literally."
 * 
 * If you don't pass in a "question" prop, how might you make it only 
 * show the punchline?
*/


/**
 * Challenge:
 * - Create state `isShown` (boolean, default to `false`)
 * - Add a button that toggles the value back and forth
*/

/**
 * Challenge:
 * Only display the punchline paragraph if `isShown` is true
*/


export default function Joke({setup, punchline}){

  const [isShown, setIsShown] = useState(false)

  function handleFlip(){
    setIsShown(prev => !prev)
  }

  return (
    <>  
      {setup && <h3> {setup} </h3>} {/* Conditional Rendering  */}
      {isShown ? <p>{punchline}</p> : null} {/* Conditional Rendering with Ternery */}
      <button onClick={handleFlip}>{isShown ? "Hide Punchline" : "Show Punhcline"}</button>
      <hr />
    </>
  )
}