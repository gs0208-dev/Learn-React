import reactLogo from './../assets/react-logo.svg';
/**
 * Challenge (part 1):
 * Create a custom "Page" component
 * 
 * It should return an ordered list with the reasons why you're
 * excited to be learning React :)
 * 
 * Render the Page component.
*/

/**
Challenge: 

Part 2: 
- Add a `<header>` element with an `<img />` element with the image of the 
  React logo inside (src="react-logo.png") and make sure to set the 
  width to something more manageable so it doesn't take up the whole screen.
  Also, as always, you should include some alt text on the image.
- Add an `<h1>` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list, then wrap
  the `<h1>` and `<ol>` inside a `<main>` element to keep our semantic
  structure flowing well. 
- Add a `<footer>` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
*/

/** Mini Challenge:
 * 
 * Move the `header` element from the Page component into 
 * its own component called "Header"
 * 
 * Then render an instance of the Header component inside
 * the Page component where the `header` used to be.
*/

/** Challenge: 
 * Move the `main` element into its own component called "MainContent" 
 * and render that component inside the Page component.
 * 
 * Do the same with the `footer` element, moving it into a new
 * component called "Footer"
*/

/**
 * Challenge:
 * 
 * - Add a `nav` > `ul` > `li` (x3). The 3 items should say:
 *   "Pricing", "About", and "Contact"
*/

function Header(){
  return(
    <header>
      <img src={reactLogo} alt="react-logo" width="50px" />
      
    </header>
  )
}

function MainContent(){
  return (
    <main>
      <h1>
        React Learning.
      </h1>
      <ol className='ordered-list'>
        <li>I'm learning because it is modern way to develop websites.</li>
        <li>To level up my skill.</li>
        <li>To get a better job.</li>
      </ol>
    </main>
  )
}

function Footer(){
  return (
    <footer>
      © 20xx Software development. All rights reserved.
    </footer>
  )
}

export function Page() {
  return (
    //Part 1 & 2
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
    
  );
}
