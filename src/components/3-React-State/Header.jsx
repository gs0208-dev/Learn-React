import chefimg from "../../assets/React-State/chef-claude.png"



/**
 * Challenge: Build the Header component in a separate file
 * and render it here in the App component
*/

export function Header(){
  return(
    <header className="rs-header">
        <img className="rs-img" src={chefimg} alt="chefClaude" />
        <span className="rs-text">
          Chef Claude
        </span>
    </header>
  );
}