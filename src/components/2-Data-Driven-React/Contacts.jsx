import catimage from "../../assets/DDR-images/cat-image.jpg";
import phoneimg from "../../assets/DDR-images/phone-img.png";


/**
 * Challenge: Fix the code below to use the `props`
 * object values in place of the hardcoded values below
 * 
 * Note: There will be a small bug in the code, so do your
 * best to squash it! 🐛
*/

/**
 * Challenge: fix the bug, now that we've 
 * destructured the props object
*/

export function Contacts({img, name, phone, email}){
  
  return (
    <article className="contact-card">
      <img 
        src={img}
        alt="Photo of Mr. Whiskerson"
      />
      <h3>{name}</h3>
      <div className="info-group">
        <img 
          src={catimage}
          alt="phone icon" 
        />
        <p>{phone}</p>
      </div>
      <div className="info-group">
        <img 
          src={phoneimg} 
          alt="mail icon"
        />
        <p>{email}</p>
      </div>
    </article>
  )
}