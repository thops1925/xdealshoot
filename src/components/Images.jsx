import React, { useState } from 'react'
import SelectedImage from './SelectedImage'

const Images = ({ photo }) => {

    return (
        <div className="grid md:grid-cols-3 items-center justify-center md:px-16 mb-10" >
            {photo.map((item, index) => (
                <SelectedImage item={item} key={index} idx={index} />
            ))}
        </div >

    )
}


export default Images