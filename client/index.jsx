import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Images1 from './images1.jsx';
import Images2 from './images2.jsx';
class Amenities extends React.Component {
	constructor(props) {
		super(props);
		this.ShowList = this.ShowList.bind(this);
		this.state = {
			amenities: {},
			urls: {},
			showState: false,
			propertyId: 0,
		}
	}

	componentDidMount() {
		var that = this;
		$.ajax({
			url: "/",
			method: "GET",
		}).done((data) => {
			var results = JSON.parse(data);
			that.setState({
				amenities: results.room,
				urls: results.URLs,
				propertyId: id
			})
		})
	}

	ShowList() {
		ReactDOM.render(<Images2 amenities={this.state.amenities} />, document.body);
		//another render function for the button inside Images2.
		//check out modals
	}

	render() {
		return(
			<html>
			<script src="./bundle.js"></script>
				<style>
				</style>
				<div>
					<Images1 amenities={this.state.amenities} images={this.state.urls}/>
				</div>
				<div>
					<button onClick={() => this.showList}></button>
				</div>
			</html>
			)
	}
}

ReactDOM.render(<Amenities />, document.getElementById('amenities'));