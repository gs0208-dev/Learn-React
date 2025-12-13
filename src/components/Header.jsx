import reactLogo from './../assets/react-logo.svg';

export function Header(){
  return(
    <header className='header'>
      <img className='react-logo' src={reactLogo} alt="react-logo"/>
      <nav>
        <ul className='nav-list'>
          <li className='nav-list-items'>Pricing</li>
          <li className='nav-list-items'>About</li>
          <li className='nav-list-items'>Contact</li>
        </ul>
      </nav>
    </header>
  )
}