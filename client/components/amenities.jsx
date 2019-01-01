import React from 'react';
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
    };
  }

  componentDidMount() {
  	var index = Math.floor(Math.random() * 100);
    var that = this;
    $.ajax({
      url: document.URL + '/amenities/'
    }).done((data) => {
      that.setState({
        specialAmenities: data.room[0].amenities.special,
        essentialAmenities: data.room[0].amenities.essential,
        urls: data.URLs[0],
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

export default Amenities;