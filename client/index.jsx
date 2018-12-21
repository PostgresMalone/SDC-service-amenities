import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Images1 from './images1.jsx';
import Images2 from './images2.jsx';
import styles from './styles.css.js';
class Amenities extends React.Component {
	constructor(props) {
		super(props);
		this.ShowList = this.ShowList.bind(this);
		this.state = {
			specialAmenities: {},
			essentialAmenities: {},
			urls: {},
			showState: false,
			propertyId: 0,
		}
	}

	componentDidMount() {
		var that = this;
		$.ajax({
			url: "/images",
		}).done((data) => {
			var results = JSON.parse(data);
			console.log(results);
			that.setState({
				specialAmenities: results.room[0].amenities.special,
				essentialAmenities: results.room[0].amenities.Essential,
				urls: results.URLs[0],
				propertyId: 1
			})
		})
	}

	ShowList() {
		ReactDOM.render(<Images2 amenities={this.state.essentialAmenities} />, document.body);
		//another render function for the button inside Images2.
		//check out modals
	}

	render() {
		return(
				<div>
					<Images1 special={this.state.specialAmenities} essential={this.state.essentialAmenities} images={this.state.urls}/>
					<button onClick={() => console.log(this.state)}>Show All Amenities</button>
				</div>
			)
	}
}

ReactDOM.render(<Amenities />, document.getElementById('amenities'));