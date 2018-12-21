const div = {

};

const button = {
	position:'fixed',
	top: '0',
	left: '0',
};

const imageList = {
	position:'absolute',
  background: 'white',
  width: '100%',
  height: 'auto',
}



const notPresent = {
	display: 'list-item',
	opacity: '0.5',
	textDecoration: 'line-through',
};

const present = {
	display: 'list-item',
};

const modalShow = {
	position: 'absolute',
  top: '100',
  left: '100',
  width:'100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.6)',
	display: 'block'
};

const modalHide = {
	display: "none",
};

export default {
	modalShow,
	modalHide,
	div,
	button,
	notPresent,
	present,
	imageList
}