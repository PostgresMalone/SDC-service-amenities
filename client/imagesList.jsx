import React from 'react';
import styles from './styles.css.js';

const imagesList = (props) => {

  return (
    <div style={props.show ? styles.modalShow : styles.modalHide}>
      <section style={styles.imageList}>
        <button onClick={() => props.toggle()}>Back</button>
        <h1>Special Amenities</h1>
        {Object.keys(props.special).map((amenity) => (
          props.special[amenity] 
            ? <div style={styles.special}>
              <label className="special" htmlFor={amenity} style={styles.present}>{amenity}
                <img name={amenity} src={props.images[amenity]} style={styles.present}></img>
              </label>
            </div> 
            : null
        ))}
        <h1>Essential Amenities</h1>
        {Object.keys(props.essential).map((amenity) => (
          props.essential[amenity] 
            ? <div style={styles.special}>
              <label className="essential" htmlFor={amenity} style={styles.present}>{amenity}</label>
              <img name={amenity} src={props.images[amenity]} style={styles.present}></img>
            </div> 
            : null
        ))}
        <h1>Unavailable Amenities</h1>
        {Object.keys(props.special).map((amenity) => (
          props.special[amenity] 
            ? null 
            : <div style={styles.special}>
              <label className="special" htmlFor={amenity} style={styles.notPresent}>{amenity}
                <img name={amenity} src={props.images[amenity]} style={styles.notPresent}></img>
              </label>
            </div>
        ))}
        {Object.keys(props.essential).map((amenity) => (
          props.essential[amenity] 
            ? null 
            : <div style={styles.special}>
              <label className="essential" htmlFor={amenity} style={styles.notPresent}>{amenity}</label>
              <img name={amenity} src={props.images[amenity]} style={styles.notPresent}></img>
            </div>
        ))}
      </section>
    </div>
  );
};

export default imagesList;