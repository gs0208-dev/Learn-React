import emptyStar from "../../assets/React-State/empty-star.png"
import filledStar from "../../assets/React-State/filled-star.png"

export default function Star({isFilled, handleClick}){
  
  let starIcon = isFilled ? filledStar : emptyStar;
  let ariaLabel =isFilled ? "Remove from favorites" : 'Add to favorites';
  let imageAlt = isFilled? "Filled star icon" : "empty star icon";

  return (
    <button 
      onClick={handleClick}
      aria-pressed={isFilled}
      aria-label= { ariaLabel}
      className="favorite-button">
      <img width={30}
        src={starIcon}
        alt={imageAlt}
        className="favorite"
      />
    </button>
  )
}