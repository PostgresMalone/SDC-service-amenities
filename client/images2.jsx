import React from 'react';
import styles from './styles.css.js';

const images2 = (props) => (
	<div>
	<h1>Essential Amenities</h1>
		{Object.keys(props.amenities).map((amenity) => (
			<div style={styles.special}>
				<img name={amenity} src={props.images[amenity]} style={styles.essential}></img>
				<label className="essential" htmlFor={amenity}>{amenity}</label>
			</div>))}
	</div>
);

export default images2;