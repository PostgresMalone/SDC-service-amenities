var fonts = {
  fontFamily: 'Circular,"Helvetica Neue",Helvetica,Arial,sans-serif',
  fontSize: '16px',
  lineHeight: '1.43',
  color: '#484848',
  textAlign: 'center'
};

var headfonts = {
  fontFamily: 'Circular,"Helvetica Neue",Helvetica,Arial,sans-serif',
  fontSize: '36px',
  lineHeight: '40px',
  color: '#484848',
  gridColumn: '1/7',
  paddingBottom: '20px',
};

var initialImage = {
  border: '0',
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  verticalAlign: 'middle',
};

var initialText = {
  fontFamily: 'Circular,"Helvetica Neue",Helvetica,Arial,sans-serif',
  lineHeight: '24px',
  maxHeight: '48px',
  overflow: 'hidden',
  textoverflow: 'ellipsis',
  boxAlign: 'center',
  fontSize: '16px',
  color: '#484848',
  textAlign: 'center'
}

var modalButton = {
  top: '0',
  left: '0',
  border: '0px',
  padding: '0px',
  margin: '0px',
  backgroundColor: '#F2F2F2',
  fontFamily: 'Circular,"Helvetica Neue",Helvetica,Arial,sans-serif',
  fontSize: '40px',
  color: '#484848',
  textAlign: 'center',
  cursor: 'pointer',
};

var initialButton = {
  fontFamily: 'Circular,"Helvetica Neue",Helvetica,Arial,sans-serif',
  fontWeight: 'bold',
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

var notPresentText = {
  width:'300px',
  gridColumn: '1/3', 
  opacity: '0.5',
  textDecoration: 'line-through',
  fontFamily: 'Circular,"Helvetica Neue",Helvetica,Arial,sans-serif',
  fontSize: '16px',
  lineHeight: '1.43',
  color: '#484848',
};

var notPresentImage = {
  gridColumn:'3', 
  opacity: '0.5',
  height:'64px',
  width: '64px',
};

var container = {
  display: 'grid',
  gridTemplateColumns: 'auto auto auto auto auto auto',
  gridRowGap: '20px',
  marginBottom: '100px'
};

var presentTextHeader = {
  paddingBottom: '10px',
  gridColumn: '1/5',
  textAlign:'left',
  fontFamily: 'Circular,"Helvetica Neue",Helvetica,Arial,sans-serif',
  fontSize: '24px',
  lineHeight: '1.43',
  color: '#484848',
}

var presentText = {
  width:'300px',
  gridColumn: '1/3',
  textAlign:'left',
  fontFamily: 'Circular,"Helvetica Neue",Helvetica,Arial,sans-serif',
  fontSize: '16px',
  lineHeight: '1.43',
  color: '#484848',
};

var presentImage = {
  height:'64px',
  width: '64px',
};

var modalContainer = {
  display: 'grid',
  gridTemplateColumns: 'auto auto auto auto auto',
  gridRowGap: '20px',
  marginBottom: '100px',
};

var modalEntry = {
  display:'grid',
  marginLeft: '100px',
  marginBottom: '20px',
  gridTemplateColumns: 'auto auto auto auto auto',
  gridColumn: '1/5',
}

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
  container,
  fonts,
  headfonts,
  modalButton,
  modalShow,
  modalHide,
  modalContainer,
  modalEntry,
  presentImage,
  notPresentText,
  notPresentImage,
  presentText,
  presentTextHeader,
  imageList,
  initialImage,
  initialText,
  initialButton,
};