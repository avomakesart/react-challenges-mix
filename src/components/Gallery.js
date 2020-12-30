import React, { useState } from 'react';
import { GalleryImage } from './GalleryImage.js';
import { GalleryModal } from './GalleryModal.js';
import './gallery.css';

let imgUrls = [
  'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
];

export const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState('');

  const openModal = (url) => {
    setIsOpen(true);
    setUrl(url);
  };

  const closeModal = () => {
    setIsOpen(false);
    setUrl('');
  };

  return (
    <div className="gallery-container">
      <div className="gallery-row">
        {imgUrls.map((url, index) => (
          <div key={index}>
            <div
              onClick={() => openModal(url)}
              defaultValue={url}
              style={{ cursor: 'pointer' }}
            >
              <div className="gallery-card">
                <GalleryImage
                  className="gallery-thumbnail"
                  src={url}
                  alt={'Img number' + (index + 1)}
                  key={index}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <GalleryModal show={isOpen} onClick={closeModal} src={url} name />
    </div>
  );
};
