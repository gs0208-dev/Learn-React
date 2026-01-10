import { useState } from "react"


/**
 * Challenge: Create state controlling whether
 * this pad is "on" or "off". Use the incoming
 * `props.on` to determine the initial state.
 * 
 * Create an event listener so when the pad is clicked,
 * it toggles from "on" to "off".
 * 
 * Goal: clicking each pad should toggle it on and off.
*/


export default function Pad (props){

  function flipHandler(){
    setIsOn(prev => !prev);
  }
  
  return(
    <button onClick={() => props.toggle(props.id)} className={props.on ? "on" : undefined} style={{backgroundColor: props.color}}></button>
  )
}