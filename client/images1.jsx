import React from 'react';
import styles from './styles.css.js';

const images1 = (props) => (
	<div>
	<h1>Special Amenities</h1>
		{Object.keys(props.special).map((amenity) => (
			<div style={styles.special}>
				<label className="special" htmlFor={amenity}>{amenity}
				<img name={amenity} src={props.images[amenity]} style={styles.special}></img>
				</label>
			</div>
				))}
	<h1>Essential Amenities</h1>
		{Object.keys(props.essential).map((amenity) => (
			<div style={styles.special}>
				<label className="essential" htmlFor={amenity}>{amenity}</label>
				<img name={amenity} src={props.images[amenity]} style={styles.essential}></img>
			</div>))}
	</div>
);

export default images1;