import trollFace from "../../assets/Side-Effects-images/troll-face.png"

export default function Header() {
  return (
    <header className="header">
      <img 
        src={trollFace} 
      />
      <h1>Meme Generator</h1>
  </header>
  )
}