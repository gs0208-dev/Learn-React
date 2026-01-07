import chefimg from "../../assets/React-State/chef-claude.png"
import { useState } from "react"



/**
 * Challenge: Build the Header component in a separate file
 * and render it here in the App component
*/

/**
 * Challenge:
 * Raise state up a level and pass it down to both the
 * Header and Body components through props.
*/

export function Header({userName}){
  /*
  return(
    <header className="rs-header">
        <img className="rs-img" src={chefimg} alt="chefClaude" />
        <span className="rs-text">
          Chef Claude
        </span>
    </header>
  );
  */

 

  return (
    <header>
      <img alt="avatr img"/>
      <p>{userName}</p>
    </header>
  )

}