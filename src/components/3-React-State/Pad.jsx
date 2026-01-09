export default function Pad (props){
  console.log(props);
  
  return(
    <button className={props.on && "on"} style={{backgroundColor: props.color}}></button>
  )
}