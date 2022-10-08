import React from 'react';
import { closeAddItem } from '../../../store/addItemSlice';
import { useDispatch } from 'react-redux';

const clickAwayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  minWidth: '100%',
  height: '100%',
  minHeight: '100%',
  zIndex: 2,
  background: 'none',
};

const modalStyle = {
  position: 'absolute',
  zIndex: 3,
  width: '500px',
  height: '800px',
  top: '50%',
  marginTop: '-400px',
  left: '50%',
  marginLeft: '-250px',
  background: 'white',
  borderRadius: '12px',
  boxShadow: '0 4px 12px 4px rgba(0,0,0,0.12)',
  padding: '2rem',
};

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div
        style={clickAwayStyle}
        onClick={() => dispatch(closeAddItem())}
      ></div>
      <div style={modalStyle}>{children}</div>
    </>
  );
};

export default Modal;
