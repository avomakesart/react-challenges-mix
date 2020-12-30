/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export const GalleryModal = ({ show, isOpen, onClick, name, src }) => {
  if (!show) {
    return null;
  }

  return (
    <div show={isOpen} className="modal-overlay" onClick={onClick} name={name}>
      <div className="modal-body">
        <span className="modal-close" onClick={onClick}>
          x
        </span>
        <img src={src} alt="" />
      </div>
    </div>
  );
};
