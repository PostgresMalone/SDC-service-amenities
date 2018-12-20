import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Images1 from './images1';
import Images2 from './images2';
class Amenities extends React.Component {
	constructor(props) {
		super(props);
		this.ShowList = this.ShowList.bind(this);
		this.state = {
			amenities: {},
			showState: false,
		}
	}

	componentDidMount() {
		var that = this;
		$.ajax({
			url: "/amenities",
			method: "GET",
		}).done((data) => {
			var results = JSON.parse(data);
			that.setState({
				amenities: data,
			})
		})
	}

	ShowList() {
		ReactDOM.render(<Images2 amenities={this.state.amenities} />, document.getElementById('amenities'));
		//another render function for the button inside Images2.
	}

	render() {
		return(
			<html>
				<style>
				</style>
				<div>
					<Images1 amenities={this.state.amenities} />
				</div>
				<div>
					<button onClick={() => this.showList}></button>
				</div>
			</html>
			)
	}
}

ReactDOM.render(<Amenities />, document.getElementById('amenities'));