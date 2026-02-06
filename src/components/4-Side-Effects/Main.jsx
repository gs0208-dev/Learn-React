import { useState } from "react"

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


export default function Main() {

  const [info, setInfo] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageURL: "http://i.imgflip.com/1bij.jpg"
  })

  function handleChange(event){
    const {value,name} = event.currentTarget;
    setInfo(prev => ({
      ...prev,
      [name]: value
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
        <button>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={info.imageURL} />
        <span className="top">{info.topText}</span>
        <span className="bottom">{info.bottomText}</span>
      </div>
    </main>
  )
}