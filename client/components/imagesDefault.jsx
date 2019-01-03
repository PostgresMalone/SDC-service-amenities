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
    <div style={styles.container}>
      <h1 style={styles.headfonts}>Amenities</h1>
      {Object.keys(toMap).map((amenity) => (
        <div style={styles.initial, styles.fonts}>
          <div>
            <img style={styles.initialImage, styles.fonts} name={amenity} src={props.images[amenity]}></img>
          </div>
          <div>
            <div style={styles.initialText, styles.fonts}>{amenity}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default imagesDefault;

