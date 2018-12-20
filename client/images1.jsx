import React from 'react';

const images1 = (props) => (
	<div>
		{Object.keys(props.amenities).map((amenity) => {
			<div>
				<img name={amenity} src={props.images[amenity]}></img>
				<label class="images1" for={amenity}>{amenity}</label>
			</div>})}
	</div>
);

export default images1;