var fonts = {
  fontFamily: 'Circular,"Helvetica Neue",Helvetica,Arial,sans-serif',
  fontSize: '16px',
  lineHeight: '1.43',
  color: '#484848',
};

var headfonts = {
  fontFamily: 'Circular,"Helvetica Neue",Helvetica,Arial,sans-serif',
  fontSize: '36px',
  lineHeight: '40px',
  color: '#484848',
};

var divbox = {
  display: 'block',
  marginBottom: '48px',
  boxSizing: 'border-box',  
};

var initialImage = {
  position: 'absolute',
  verticalAlign: 'middle',
  border: '0',
  boxSizing: 'border-box',
};

var initialText = {
  lineHeight: '24px',
  maxHeight: '48px',
  overflow: 'hidden',
  textoverflow: 'ellipsis',
  display: '-webkit-box',
  boxAlign: 'center',
  textAlign: 'center',
}

var initial = {
  width: '100%',
  backgroundColor: '#F2F2F2',
  borderRadius: '4px',
  overflow: 'hidden',
  display: 'inline-block',
  paddingLeft: '4px',
  paddingRight: '4px',
  width: '16.666666666666668%',
  maxHeight: '200px',
  maxWidth: '300px',
  height: '200px',
  textAlign: 'center',
};

var button = {
  position: 'fixed',
  top: '0',
  left: '0',
};

var initialButton = {
  backgroundColor: '#F2F2F2',
  color: '#A61D55',
  border: '0px',
  margin: '0px',
  padding: '0px',
  textAlign: 'left',
  cursor: 'pointer',
}

var imageList = {
  position: 'sticky',
  background: 'white',
  width: 'auto',
  margin: 'auto',
  height: 'auto',
  fontFamily: 'Circular,"Helvetica Neue",Helvetica,Arial,sans-serif',
  fontSize: '16px',
  lineHeight: '1.43',
  color: '#484848',
};


var notPresent = {
	marginRight: 'auto',
	marginLeft: 'auto',
  display: 'list-item',
  opacity: '0.5',
  textDecoration: 'line-through',
  textAlign: 'center',
  fontFamily: 'Circular,"Helvetica Neue",Helvetica,Arial,sans-serif',
  fontSize: '16px',
  lineHeight: '1.43',
  color: '#484848',
};

var present = {
	marginRight: 'auto',
	marginLeft: 'auto',
  display: 'list-item',
  textAlign: 'center',
  fontFamily: 'Circular,"Helvetica Neue",Helvetica,Arial,sans-serif',
  fontSize: '16px',
  lineHeight: '1.43',
  color: '#484848',
};

var modalShow = {
	margin:'auto',
  position: 'absolute',
  top: '100',
  left: '100',
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.6)',
  display: 'block'
};

var modalHide = {
  display: 'none',
};

export default {
  fonts,
  headfonts,
  modalShow,
  modalHide,
  divbox,
  button,
  notPresent,
  present,
  imageList,
  initial,
  initialImage,
  initialText,
  initialButton,
};