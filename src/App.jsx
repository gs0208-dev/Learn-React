import './App.css'
import { Page } from './components/StaticPage/customComponent'
import { Main } from './components/StaticPage/Main'
import Navbar from './components/StaticPage/Navbar'
import { Header } from './components/Data-Driven-React/Header'
import { Entry } from './components/Data-Driven-React/Entry'
import { Contacts } from './components/Data-Driven-React/Contacts'
import Joke from './components/Data-Driven-React/Joke'
import catimg from './assets/DDR-images/cat-image.jpg'
import catimg2 from './assets/DDR-images/cat-img2.jpg'
import catimg3 from './assets/DDR-images/cat-img3.jpg'
import catimg4 from './assets/DDR-images/cat-img4.jpg'

function App() {

  return (
    <>
      <Joke punchline=" I can't wait to see her face light up when she opens it."/>
      <Joke setup="How did the hacker escape the police?" punchline="He just ransomware!"/>
      <Joke setup=" Why don't pirates travel on mountain roads?" punchline=" Scurvy."/>
      <Joke setup=" Why do bees stay in the hive in the winter?" punchline="Swarm. "/>
      <Joke setup="What's the best thing about Switzerland?" punchline="I don't know, but the flag is a big plus!" />
    </>
  )

  // return (
  //   <div className='contacts'>
  //   <Contacts 
  //     img={catimg}
  //     name="Mr. Whiskerson"
  //     phone="(212) 555-1234"
  //     email="mr.whiskaz@catnap.meow"
  //   />
  //   <Contacts 
  //     img={catimg2}
  //     name="Fluffykins"
  //     phone="(212) 555-2345"
  //     email="fluff@me.com"
  //   />
  //   <Contacts 
  //     img={catimg3}
  //     name="Felix"
  //     phone="(212) 555-4567"
  //     email="thecat@hotmail.com"
  //   />
  //   <Contacts 
  //     img={catimg4}
  //     name="Pumpkin"
  //     phone="(0800) CAT KING"
  //     email="pumpkin@scrimba.com"
  //   />
  //   </div>
  // )
}

export default App
