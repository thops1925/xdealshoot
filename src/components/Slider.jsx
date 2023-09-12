import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

export default function Slider({ dataSlider, data, close }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(dataSlider);

  const goToNextSlide = () => {
    const nextIndex = (currentSlideIndex + 1) % data.length;
    setCurrentSlideIndex(nextIndex);
  };

  const goToPreviousSlide = () => {
    const previousIndex = (currentSlideIndex - 1 + data.length) % data.length;
    setCurrentSlideIndex(previousIndex);
  };

  return (
    <div className="mx-auto flex justify-center items-center">
      <div className="relative flex items-center justify-center mx-2">
        <AiOutlineClose
          onClick={() => close(true)}
          className="absolute w-8 h-8 bg-white hover:opacity-100 z-10 opacity-40 top-0 right-0"
        />
        <img
          src={data[currentSlideIndex]}
          alt={data[currentSlideIndex]}
          className="w-auto h-auto md:h-[70vh] object-contain relative"
        />
        <div className="absolute flex justify-between bottom-0">
          <AiOutlineLeft
            onClick={goToPreviousSlide}
            className="w-12 h-12 z-10 hover:opacity-100 hover:bg-gray-200 opacity-40 rounded-lg"
          />
          <AiOutlineRight
            onClick={goToNextSlide}
            className="w-12 h-12 z-10 hover:opacity-100 hover:bg-gray-200 opacity-40 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}