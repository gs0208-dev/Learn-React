import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Page } from './StaticPage/customComponent'
import { Main } from './components/Main'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Main />
    </>
  )
}

export default App
