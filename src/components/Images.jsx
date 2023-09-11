import React, { useState } from 'react';
import SelectedImage from './SelectedImage';
import Slider from './Slider';

const Images = ({ photo }) => {
  const [isGalleryOpen, setGalleryOpen] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState();

  const handleGalleryToggle = () => {
    setGalleryOpen(!isGalleryOpen);
  };

  const handleImageSelect = (index) => {
    setSelectedImageIndex(index);
    handleGalleryToggle();
  };

  return isGalleryOpen ? (
    <div className="grid md:grid-cols-3 mx-4 items-center justify-center md:px-16 mb-10" 
    onClick={handleGalleryToggle}>
      {photo.map((item, index) => (
        <div 
        onClick={() => handleImageSelect(index)}
         key={item}>
          <SelectedImage
           item={item}
            key={index} />
        </div>
      ))}
    </div>
  ) : (
    <div className="my-4">
      <Slider 
      data={photo} 
      dataSlider={selectedImageIndex} 
      close={handleGalleryToggle} />
    </div>
  );
};

export default Images;
