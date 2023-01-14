import React from 'react';
import { About, Cover } from '../constant';
export default function Home() {
    const [{ title, story }] = About;
    return (
        <div className="flex justify-center items-center flex-col md:flex-row mb-3 w-full h-[50%] px-10 md:px-40">
            <div className="flex-1 flex justify-center items-center flex-col md:flex-col  md:px-4">
                <h1 className=" flex justify-center items-center font-cursive font-thin border-b-2  border-gray-200 text-gray-800 text-6xl md:text-[54px] pt-5">
                    {title}
                </h1>
                <p className="flex-1 flex justify-center items-center font-poppins font-normal my-10  text-gray-600 text-sm px-6 md:px-0">
                    {story}
                </p>
                {/* <p className="text-justify text-gray-600 mt-10 font-thops font-bold ">
              {/* {description} */}
                {/* </p> */}
            </div>

            <div className="flex-1 flex justify-center items-center flex-col md:flex-col md:mx-0">
                <img className="w-[90%] h-[90%] object-cover py-5" src={Cover} alt="cover"

                />
            </div>
        </div>
    );
}
