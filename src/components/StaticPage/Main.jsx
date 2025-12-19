/**
 * Challenge: Build out the main content section!
 * 
 * For now, skip 2 aspects of the design and we'll work on them later:
 *   1. The colored bullets in the list
 *   2. The larger gray React logo on the side
*/

/* 
Challenge: Place the gray react logo in the background

Don't use an `img` element, but rather set it as the
`background-image` of the `main` element.

Hint: you'll need to use the following properties:
- background-image: url(...)
- background-repeat
- background-position

(Or the shorthand `background` property with values for all
those other properties)
*/


export function Main(){
  return(
    <main className="main-main">
      <h1 className="main-text">
        Fun facts about React
      </h1>
      <ul className="main-ul">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  )
}