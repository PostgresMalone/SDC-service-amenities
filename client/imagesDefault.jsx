import React from 'react';
import styles from './styles.css.js';

const imagesDefault = (props) => {
  var count = 0; 
  return (
    <div>
      <h1>Amenities</h1>
      {Object.keys(props.special).map((amenity) => (
        props.special[amenity] 
          ? <div style={styles.initial}>
            <img style={styles.initial} name={amenity} src={props.images[amenity]}></img>
            <label className="special" htmlFor={amenity} style={styles.initial}>{amenity}</label>
          </div>
          : null
      ))}
      {Object.keys(props.essential).map((amenity) => (
        props.essential[amenity] 
          ? <div style={styles.initial}>
            <img style={styles.initial} name={amenity} src={props.images[amenity]}></img>
            <label className="essential" htmlFor={amenity} style={styles.initial}>{amenity}</label>
          </div> 
          : null
      ))}
    </div>
  );
};
export default imagesDefault;