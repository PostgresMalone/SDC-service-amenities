import React from 'react';
import styles from './styles.css.js';

const imagesDefault = (props) => {
  var count = 0; 
  return (
    <div>
      <h1>Amenities</h1>
      {Object.keys(props.total).map((amenity) => (
        props.total[amenity] 
          ? <div style={styles.initial}>
            <img style={styles.initial} name={amenity} src={props.images[amenity]}></img>
            <label htmlFor={amenity} style={styles.initial}>{amenity}</label>
          </div>
          : null
      ))}
    </div>
  );
};
export default imagesDefault;