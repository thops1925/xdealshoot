import React from 'react';


function Card({ id, title, photo }) {
    return (
        <div 
        key={id} 
        className="relative">
            <div 
            className="absolute inset-0 z-10 flex">
                <div className="absolute inset-0 opacity-0 bg-black hover:opacity-0 ">

                </div>
                <div className="mx-auto text-white z-10 self-center uppercase  text-lg">
                    {title}
                    </div>
            </div>
            <img src={photo[2]}
                alt="icons" 
                className="w-full h-98 rounded overflow-hidden object-cover" />
        </div>
    );
}

export default Card;
