import React from 'react';

function Card({ slideOpen, id, title, photo, setItem }) {
    const itemResult = (item) => {
        setItem(item);
    };

    return (
        <div key={id} onClick={slideOpen} className="relative">
            <div onClick={() => itemResult(photo)} className="absolute inset-0 z-10 flex">
                <div className="absolute inset-0 opacity-0 bg-black hover:opacity-0 "></div>
                <div className="mx-auto text-white z-10 self-center uppercase  text-lg">{title}</div>
            </div>
            <img src={photo[2]} onClick={() => itemResult(photo)} alt="icons" className="w-full h-98 rounded overflow-hidden object-cover" />
        </div>

    );
}

export default Card;
