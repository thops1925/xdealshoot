import React from 'react'
import { useState } from 'react'

const SelectedImage = (item) => {
    const [photo] = Object.values(item)
    return (
        <>
            <img src={photo} alt="cover" className="md:object-cover object-cover h-96 w-full md:p-2" />
        </>
    )
}

export default SelectedImage