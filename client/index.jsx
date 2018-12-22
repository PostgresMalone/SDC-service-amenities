import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ImagesList from './imagesList.jsx';
import ImagesDefault from './imagesDefault.jsx';
import styles from './styles.css.js';
class Amenities extends React.Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      show: false,
      specialAmenities: {},
      essentialAmenities: {},
      urls: {},
      showState: false,
      propertyId: 0,
    };
  }

  componentDidMount() {
    var that = this;
    $.ajax({
      url: '/images',
    }).done((data) => {
      var results = JSON.parse(data);
      that.setState({
        specialAmenities: results.room[0].amenities.special,
        essentialAmenities: results.room[0].amenities.Essential,
        urls: results.URLs[0],
        propertyId: 1
      });
    });
  }

  toggleModal () {
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    return (
      <div>
        <ImagesList special={this.state.specialAmenities} essential={this.state.essentialAmenities} 
          images={this.state.urls} toggle={this.toggleModal} show={this.state.show}/>
        <ImagesDefault special={this.state.specialAmenities} essential={this.state.essentialAmenities} 
          images={this.state.urls} />
        <button onClick={this.toggleModal}>Show All Amenities</button>
      </div>
    );
  }
}

ReactDOM.render(<Amenities />, document.getElementById('amenities'));