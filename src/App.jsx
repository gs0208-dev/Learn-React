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
import emptyStar from "./assets/React-State/empty-star.png"
import filledStar from "./assets/React-State/filled-star.png"

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

/**
 * Challenge: Fill in the values in the markup
 * using the properties of our state object above
 * (Ignore `isFavorite` for now)
*/

/**
 * Challenge: Use a ternary to determine which star image variable
 * should be used based on the `contact.isFavorite` property. Test 
 * your results by manually changing the isFavorite value in state.
 * 
 * `true` => starFilled
 * `false` => starEmpty
*/

/**
 * Challenge:
 * Update the following:
 * - aria-pressed should reflect the same value as contact.isFavorite.
 * - aria-label should switch to say "Remove from favorites" if
 *   contact.isFavorite is `true`.
 * - img alt should say "filled star icon" when it is filled.
*/

/**
 * Challenge:
 * If there are 0 unread messages, display a paragraph that says "You
 * have no unread messages". (So, the logic will be the opposite of
 * what we have for the h1)
*/

/**
 * Challenge:
 * - If there are no unread messages, display "You're all caught up!"
 * - If there's exactly 1 unread message, it should read "You have 
 *   1 unread message" (singular)
 * - If there are > 1 unread messages, display "You have <n> unread
 *   messages" (plural)
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
  */

  /*
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
  /*
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false
  })

  let starIcon = contact.isFavorite ? filledStar : emptyStar;
  let ariaLabel = contact.isFavorite ? "Remove from favorites" : 'Add to favorites';
  let imageAlt = contact.isFavorite ? "Filled star icon" : "empty star icon";

  function toggleFavorite() {
    setContact(prev => {
      return {
        ...prev,
        isFavorite: !prev.isFavorite
      }
    })
  }

  return (
    <main>
      <article className="card">
        <img
          
          className="avatar"
          alt="User profile picture of John Doe"
        />
        <div className="info">
          <button 
            onClick={toggleFavorite}
            aria-pressed={contact.isFavorite}
            aria-label= { ariaLabel}
            className="favorite-button">
            <img width={30}
              src={starIcon}
              alt={imageAlt}
              className="favorite"
            />
          </button>
          <h2 className="name">
            {contact.firstName} {contact.lastName}
          </h2>
        <p className="contact">{contact.phone}</p>
          <p className="contact">{contact.email}</p>
        </div>

      </article>
    </main>
  )
  */
  /*
  function signUp(formData){
    // const email = formData.get('email');
    // const pwd = formData.get('password');
    // const radioBtn = formData.get('employmentStatus')
    // const checkbox = formData.getAll('dietryRestrictions')
    // const favColor = formData.get('favColor');
    // console.log(email);
    // console.log(pwd);
    // console.log(radioBtn);
    // console.log(checkbox);
    // console.log(favColor);

    const data = Object.fromEntries(formData)
    const dietryRestrictions = formData.getAll('dietryRestrictions')
    const finalData = {
      ...data,
      dietryRestrictions
    }
    console.log(data);
    
    console.log('finalData: ' ,finalData);
    
    
  }

  return (
    <section>
      <h1>Sign Up</h1>
      <form action={signUp}> 
        <label htmlFor='email'>Email: </label>
        <input type="email" id='email' name='email' placeholder='joe@email.com' />
        <br />
        <label htmlFor="password">Password: </label>
        <input type="password" id='password' name='password' />
        <br />
        <label htmlFor="description">Description: </label>
        <textarea name="description" id="description"></textarea>
        <br />
        <fieldset>
          <legend>Employment Status: </legend>
          <label>
            <input type="radio" name="employmentStatus" value="Unemployed"/> Unemployed
          </label>

          <label>
            <input type="radio" name="employmentStatus"  value="Part-Time"/> Part-Time
          </label>

          <label>
            <input type="radio" name="employmentStatus"  value="Full-Time"/> Full-Time
          </label>
        </fieldset>

        <fieldset>
          <legend>Dietery Restrictions: </legend>
          <label>
            <input type="checkbox" name="dietryRestrictions" value="Kosher"/> Kosher
          </label>

          <label>
            <input type="checkbox" name="dietryRestrictions"  value="Vegan"/> Vegan
          </label>

          <label>
            <input type="checkbox" name="dietryRestrictions" value="Gluten-Free"/> Gluten-Free
          </label>
        </fieldset>
        <br />

        <label htmlFor="favColor">Choose Your Favourite Color</label>
        <select name="favColor" id="favColor" required>
          <option value="">-- Select a color --</option>
          <option value="Red">Red</option>
          <option value="Orange">Orange</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
        </select>

        <button>Submit</button>
      </form>
    </section>

  )
  */
  /*
  const [unreadMessages, setUnreadMessages] = useState([])

  return (
    <div>
      {//unreadMessages.length > 1 && <h1>  You have {unreadMessages.length} Unread Messages</h1>}
      {//unreadMessages.length === 0 && <p>You're all caught up!</p>}
      {//unreadMessages.length === 1 && <p>You have 1 Unread Message </p>} 

      {
        unreadMessages.length === 0 ? <p>You're all caught up!</p> : 
        unreadMessages.length === 1 ? <p>You have 1 Unread Message </p> : 
        unreadMessages.length > 1 ? <h1>  You have {unreadMessages.length} Unread Messages</h1> : null
      }

    </div>
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
