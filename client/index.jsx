import React from 'react';
import ReactDOM from 'react-dom';
import Amenities from './components/amenities.jsx';

// ReactDOM.render(<Amenities />, document.getElementById('Amenities'));
ReactDOM.hydrate( <Amenities />, document.getElementById('Amenities'));