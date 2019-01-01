import React from 'react';
import styles from './styles.css.js';

const imagesDefault = (props) => {
  var count = 0;
  var toMap = {};
  for (var key in props.total) {
    if(props.total[key] && count <= props.toShow) {
      toMap[key] = props.total[key];
      count++;
    }
  }
  return (
    <div>
      <h1>Amenities</h1>
      {Object.keys(toMap).map((amenity) => (
        <div style={styles.initial}>
          <img style={styles.initial} name={amenity} src={props.images[amenity]}></img>
          <label htmlFor={amenity} style={styles.initial}>{amenity}</label>
        </div>
      ))}
    </div>
  );
};
export default imagesDefault;

