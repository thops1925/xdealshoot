import React, { useState } from 'react';
import Slider from './Slider';

export default function Album({ photo }) {
    const [isDataSlide, setDataSlide] = useState();
    const modal = (index) => setDataSlide(index);
    const [hide, setHide] = useState(true);
    const hideSlide = () => setHide(prev => !prev);


    return hide ? (
        <div className="grid md:grid-cols-3 items-center justify-center md:px-16 mb-10">
            {photo.map((item, index) => {
                return (
                    <div key={index} onClick={hideSlide}>
                        <img key={item.id} className="md:object-cover object-cover h-96 w-full md:p-2" src={item} alt="cover"
                            onClick={() => modal(index)}
                        />
                    </div>
                );
            })}
        </div>
    ) : (
        <Slider key={photo.id} dataSlider={isDataSlide} data={photo} close={hideSlide} />
    );
}
