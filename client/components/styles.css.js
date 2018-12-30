const div = {

};

const imageEntry = {
	display: 'inline-flex'
}

const initial = {
  display: 'inline-flex',
  maxHeight: '200px',
  maxWidth: '300px',
  height: '200px',
  width: '300px',
  textAlign: 'center',
};

const button = {
  position: 'fixed',
  top: '0',
  left: '0',
};

const imageList = {
  position: 'sticky',
  background: 'white',
  width: 'auto',
  margin: 'auto',
  height: 'auto',
};



const notPresent = {
	marginRight: 'auto',
	marginLeft: 'auto',
  display: 'list-item',
  opacity: '0.5',
  textDecoration: 'line-through',
  textAlign: 'center'
};

const present = {
	marginRight: 'auto',
	marginLeft: 'auto',
  display: 'list-item',
  textAlign: 'center'
};

const modalShow = {
	margin:'auto',
  position: 'absolute',
  top: '100',
  left: '100',
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.6)',
  display: 'block'
};

const modalHide = {
  display: 'none',
};

export default {
  modalShow,
  modalHide,
  div,
  button,
  notPresent,
  present,
  imageList,
  initial,
  imageEntry
};