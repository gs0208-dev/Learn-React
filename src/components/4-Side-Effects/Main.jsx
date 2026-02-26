import { useEffect, useState } from "react"

/**
 * Challenge: move the hardcoded meme info into React
 * state. Use an object with `topText`, `bottomText`,
 * and `imageUrl` properties, and set the initial values to
 * the ones hardcoded below.
*/

/**
 * Challenge: update the topText value in the meme state
 * object every time the topText input box is changed
 * 
 * Note: don't worry about bottomText at this point.
*/

 /**
 * Challenge:
 * Get an array of memes from the imgflip API as soon as
 * this component renders for the first time.
 * Check the imgflip documentation for the correct URL.
 * Save the array of memes (not the whole response
 * data) to state. (For this app, we'll randomly choose
 * one of the memes from this array when the user clicks
 * the "Get a new meme image" button, but we'll do that in
 * a separate challenge.)
 * 
 * Hint: for now, don't try to use an async/await function.
 * Instead, use `.then()` to resolve the promises
 * from using `fetch`. We'll learn why after this challenge.
*/

/**
 * Challenge: Get a random image from the array of
 * allMemes when the user clicks the button. Once
 * you've gotten a random image from the array, make
 * sure to write the code that will display that
 * random meme image to the page.
*/


export default function Main() {

  const [info, setInfo] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageURL: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemes, setAllMemes] = useState([])

  useEffect(() => {
    fetch(" https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemes(data.data.memes ));
  },[])

  function handleChange(event){
    const {value,name} = event.currentTarget;
    setInfo(prev => ({
      ...prev,
      [name]: value
    }))
    
  }

  function handleClick(){
    const random = Math.floor(Math.random()*allMemes.length);
    setInfo(prev => ({
      ...prev,
      imageURL: allMemes[random].url
    }))
  }

  return (
    <main>
      <div className="form">
        <label>Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            onChange={handleChange}
          />
        </label>

        <label>Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={handleChange}
          />
        </label>
        <button onClick={handleClick}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={info.imageURL} />
        <span className="top">{info.topText}</span>
        <span className="bottom">{info.bottomText}</span>
      </div>
    </main>
  )
}