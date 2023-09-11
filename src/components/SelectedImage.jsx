import React from 'react'

const SelectedImage = (item) => {
    const [photo] = Object.values(item)
    return (
        <>
            <img 
            src={photo} 
            alt="cover" 
            className="md:object-cover object-cover h-96 w-full md:p-2 my-2"
             />
        </>
    )
}

export default SelectedImage