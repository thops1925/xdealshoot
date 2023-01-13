import React, { useEffect, useState } from 'react';

import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

export default function Slider({ dataSlider, data, close }) {
    const [isSlider, setSlider] = useState(dataSlider);
    console.log(isSlider)

    // useEffect(() => {
    //     setSlider(dataSlider);
    // }, [dataSlider]);


    const rightArrow = () => {
        const nextIndex = isSlider + 1 === data.length ? 0 : isSlider + 1
        setSlider(nextIndex)


    };
    const leftArrow = () => {
        const prevIndex = isSlider - 1 < 0 ? data.length - 1 : isSlider - 1
        setSlider(prevIndex)

    };


    return (
        <div>
            <div className="container mx-auto flex justify-center items-center mb-10 mt-10">
                <div className="relative">
                    <AiOutlineClose onClick={() => close(true)} className="absolute w-8 h-8 bg-white hover:opacity-100  z-10 opacity-40 top-0 right-0 " />
                    <img src={data[isSlider]} alt={data[isSlider]} className="w-auto h-screen object-contain relative " />
                </div>
                <div className="absolute flex justify-between bottom-0">
                    <AiOutlineLeft onClick={leftArrow} className="w-12 h-12 z-10 hover:opacity-100 hover:bg-gray-200 opacity-40 rounded-lg" />
                    <AiOutlineRight onClick={rightArrow} className="w-12 h-12 z-10 hover:opacity-100 hover:bg-gray-200 opacity-40 rounded-lg" />
                </div>
            </div>
        </div>
    );
}
