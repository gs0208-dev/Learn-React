import './App.css'
import { Page } from './components/StaticPage/customComponent'
import { Main } from './components/StaticPage/Main'
import Navbar from './components/StaticPage/Navbar'
import { Header } from './components/Data-Driven-React/Header'
import { Entry } from './components/Data-Driven-React/Entry'
import japanPlace from "./assets/DDR-images/japan-place.png";
import data from './components/Data-Driven-React/data'
import { Contacts } from './components/Data-Driven-React/Contacts'
import Joke from './components/Data-Driven-React/Joke'
import catimg from './assets/DDR-images/cat-image.jpg'
import catimg2 from './assets/DDR-images/cat-img2.jpg'
import catimg3 from './assets/DDR-images/cat-img3.jpg'
import catimg4 from './assets/DDR-images/cat-img4.jpg'
import jokesData from './components/Data-Driven-React/jokesData'

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

  const entryElements = data.map((ele) => {
    return ( 
      <Entry 
        img={ele.img} 
        title={ele.title} 
        country={ele.country} 
        googleMapsLink={ele.googleMapsLink} 
        dates={ele.dates} 
        text={ele.text} 
      /> 
    )
  })

    return (
    <>
      <Header />
      {entryElements}
    </>
    
  )



}

export default App
