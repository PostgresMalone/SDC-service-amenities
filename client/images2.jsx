import React from 'react';

const images2 = (props) => (
	<div>
		{Object.keys(props.amenities).map((amenity) => {
			<div>
				<img name={amenity} src={props.amenities[amenity].image}></img>
				<label class="images1" for={amenity}>{amenity}</label>
			</div>})}
	</div>
);

export default images2;