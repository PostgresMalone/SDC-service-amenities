import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

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
		}).done((data) => {
			var results = JSON.parse(data);
			that.setState({
				amenities: data,
			})
		})
	}

	ShowList() {
		that.setState({
			showState: !that.state.showState;
		})

	}

	render() {
		return(
			<html>
				<style>
				</style>
				<div>


				</div>
			</html>
			)
	}
}