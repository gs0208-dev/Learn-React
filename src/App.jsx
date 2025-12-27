import { Page } from './components/1-StaticPage/customComponent'
// import { Main } from './components/1-StaticPage/Main'
import Navbar from './components/1-StaticPage/Navbar'
// import { Header }  from './components/2-Data-Driven-React/Header'
import { Entry } from './components/2-Data-Driven-React/Entry'
import japanPlace from "./assets/DDR-images/japan-place.png";
import data from './components/2-Data-Driven-React/data'
import { Contacts } from './components/2-Data-Driven-React/Contacts'
import Joke from './components/2-Data-Driven-React/Joke'
import catimg from './assets/DDR-images/cat-image.jpg'
import catimg2 from './assets/DDR-images/cat-img2.jpg'
import catimg3 from './assets/DDR-images/cat-img3.jpg'
import catimg4 from './assets/DDR-images/cat-img4.jpg'
import jokesData from './components/2-Data-Driven-React/jokesData'
import { Header } from "./components/3-React-State/Header"
import Main from './components/3-React-State/Main';
import { useState } from 'react';

/**
 * Challenge: pass props to the Entry component to display
 * its data. See the `data.md` file for each prop name and its
 * value.
 * 
 * Then on the Entry component, receive and display the values
 * for those props. In the end, the page should look the same
 * as it does now, but without all the hard-coded data in the
 * component
*/

/**
 * Challenge: manually turn this string array into an array of
 * JSX elements by surrounding each ninja turtle with an <h2> element
*/

/**
 * Challenge: See if you can correctly pass the necessary props to the 
 * Joke component in the .map() (and render the jokeElements array) so 
 * the jokes show up on the page again
 */

/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
*/

/**
 * Challenge: 
 * 1. Create a function called `handleClick` that runs
 *    setIsImportant("Definitely")
 * 2. Add a click event listener to the button
 *    that runs `handleClick` when the button is clicked.
*/

/**
 * Challenge: 
 * Create state to track our count value (initial value is 0)
 * Don't forget to replace the hard-coded "0" with your new state
*/

/**
 * Challenge: 
 * - Initialize state for `isGoingOut` as a boolean
 * - Make it so clicking the button flips that
 *   boolean value (true -> false, false -> true)
 * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
*/

/**
 * Challenge: Convert the code below to use an array
 * held in state instead of a local variable. Initialize 
 * the state array as an empty array
 * 
 * Don't worry about fixing `addFavoriteThing` quite yet.
*/

/**
 * Challenge: you do it!
 * Every time "Add item" is clicked, it should add another string
 * "Test" to the list on the page
*/



function App() {

  /*
  return (
    <>
      <Joke punchline=" I can't wait to see her face light up when she opens it."/>
      <Joke setup="How did the hacker escape the police?" punchline="He just ransomware!"/>
      <Joke setup=" Why don't pirates travel on mountain roads?" punchline=" Scurvy."/>
      <Joke setup=" Why do bees stay in the hive in the winter?" punchline="Swarm. "/>
      <Joke setup="What's the best thing about Switzerland?" punchline="I don't know, but the flag is a big plus!" />
    </>
  )

  return (
    <div className='contacts'>
    <Contacts 
      img={catimg}
      name="Mr. Whiskerson"
      phone="(212) 555-1234"
      email="mr.whiskaz@catnap.meow"
    />
    <Contacts 
      img={catimg2}
      name="Fluffykins"
      phone="(212) 555-2345"
      email="fluff@me.com"
    />
    <Contacts 
      img={catimg3}
      name="Felix"
      phone="(212) 555-4567"
      email="thecat@hotmail.com"
    />
    <Contacts 
      img={catimg4}
      name="Pumpkin"
      phone="(0800) CAT KING"
      email="pumpkin@scrimba.com"
    />
    </div>
  )
  */  
  /*
  const ninjaTurtles = [ <h2>Donatello</h2> , <h2>Michaelangelo</h2> , <h2>Rafael</h2>, <h2> Leonardo</h2>]
  return (
    <main>
      {ninjaTurtles}
    </main>
  )
  */
  /*
  const jokeElements = jokesData.map((joke) => {
    return <Joke  setup={joke.setup} punchline={joke.punchline}/>
  })


  return (
    <main>
      {jokeElements}
    </main>
  )
  */
  /*
  return (
    <>
      <div className='text-shadow-emerald-500 bg-fuchsia-500 w-35'>
        Hello from tailwind 
      </div>
    </>
  )
  */
  /*
  const entryElements = data.map((ele) => {
    return ( 
      <Entry 
        key={ele.id}
        entry={ele} 
      /> 
    )
  })

    return (
    <>
      <Header />
      <div className="ddr-entry">
        {entryElements}
      </div>
    </>
    
  )
  */
  /*
  let [isImportant , setIsImportant] = useState("Yes");

  function handleClick(){
    setIsImportant("Defenitely")
  }

  return (
    <main>
      <h1 className="title">Is state important to know?</h1>
      <button onClick={handleClick} className="value">{isImportant}</button>
    </main>
  )
  */
  /*
  const [isState, setIsState] = useState(0)

    
    //  * Note: if you ever need the old value of state
    //  * to help you determine the new value of state,
    //  * you should pass a callback function to your
    //  * state setter function instead of using
    //  * state directly. This callback function will
    //  * receive the old value of state as its parameter,
    //  * which you can then use to determine your new
    //  * value of state.
     

  function handleAdd(){
    setIsState( prevCount => prevCount + 1);
  }

  function handleSub(){
    setIsState(prevCount => prevCount - 1);
  }

  return (
    <main className="container">
      <h1>How many times will Bob say "state" in this section?</h1>
      <div className="counter">
        <button onClick={handleSub} className="minus" aria-label="Decrease count">–</button>
        <h2 className="count">{isState}</h2>
        <button onClick={handleAdd} className="plus" aria-label="Increase count">+</button>
      </div>
    </main>
  )
  */
  /*
  const [isGoingOut, setIsGoingOut] = useState(true);

  function flipBoolean(){
    setIsGoingOut(prev => !prev)
  }

  return (
    <main>
      <h1 className="title">Do I feel like going  out tonight?</h1>
      <button onClick={flipBoolean}  className="value">{isGoingOut? "Yes" : "No"}</button>
    </main>
  )
  */
  /*
  const [myFavoriteThings, setMyFavoriteThings] = useState([])
  const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
  "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
  const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

  function addFavoriteThing() {
    setMyFavoriteThings( prev => [...prev,allFavoriteThings[prev.length]]);

  }
  
  return (
    <main>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">
        {thingsElements}
      </section>
    </main>
  )
  */


  return(
    <div className='rs-bg'>
      <Header />
      <Main />  
    
    </div>
      
    
  )
}

export default App
