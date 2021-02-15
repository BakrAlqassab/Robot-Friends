import React from 'react'
import "./Card.css";

function Card(props) {
  // function Card({id,name,email}) {
  const {key,id,name,email} = props;
  return (
    // tc = text-align:center, bg-light-green:Background color, dib:Dispaly:inline-block, br3:border:3, 
    //pa:padding,me:margin,grow:grow on hover,bw:Border width ,shadow is shadow :)
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 " key={key}>
     <img alt='robots' src={`https://robohash.org/${id}?200*200`}/>
     <div>
     <h2>{name}</h2>
     <p>{email}</p>
     </div>
     
     
     
         </div>
  );
}

export default Card;
