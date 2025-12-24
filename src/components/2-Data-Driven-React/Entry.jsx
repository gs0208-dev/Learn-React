import maplogo from "../../assets/DDR-images/map-logo.png";

/**
 * Challenge: Build out the Entry component and render 1 instance of it
 * to the App
 * 
 * For now, just hard-code in the data, which you can find in
 * japan.md so you don't have to type it all out manually :)
 * 
 * Notes:
 * – Only render 1 instance of this Entry component for now
 * – I've pulled in marker.png for the little map marker icon
 *   that goes next to the location name
 * – The main purpose of this challenge is to show you where our limitations
 *   currently are, so don't worry about the fact that you're hard-coding all
 *   this data into the component.
*/

/**
 * Challenge: Fix our component! 😱
*/

export function Entry(props){
  console.log(props);
  return (
      <div className="japan">
        <img src={props.entry.img.src} alt={props.entry.img.alt} className="ddr-entry-image" />
        <div className="ddr-entry-content">
          <img src={maplogo} alt="map-logo" className="ddr-entry-map-logo" />
          <span className="ddr-entry-japan-text">{props.entry.country}</span>
          <a className="ddr-entry-map-link" href={props.entry.googleMapsLink}>View on Google Maps</a>
          <h2 className="ddr-entry-mtf">{props.entry.title}</h2>
          <span>{props.entry.dates}</span>
          <p>{props.entry.text}</p>
        </div>
      </div>
  );
}