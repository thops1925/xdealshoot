import React, { useState } from 'react'

const Images = ({ photo, id }) => (
    <div className="grid md:grid-cols-3 items-center justify-center md:px-16 mb-10">
        {photo.map((item, index) => (
            <img key={index} src={item} alt="cover" className="md:object-cover object-cover h-96 w-full md:p-2" />
        ))}
    </div>
)


export default Images