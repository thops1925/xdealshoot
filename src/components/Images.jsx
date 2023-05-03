import React, { useState } from 'react'
import SelectedImage from './SelectedImage'
import Slider from './Slider'

const Images = ({ photo }) => {
    const [open, close] = useState(true)
    const [xid, setXid] = useState()
    return open ? (
        <div className="grid md:grid-cols-3 mx-4 items-center justify-center md:px-16 mb-10" onClick={() => close(!open)} >
            {photo.map((item, index) => (
                <div onClick={() => setXid(index)}>
                    <SelectedImage item={item} key={index} />
                </div>
            ))}
        </div >
    ) : (
        <div className='my-4'>
            <Slider data={photo} dataSlider={xid} close={close} />
        </div>
    )
}


export default Images