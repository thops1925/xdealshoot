import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Data } from '../constant';
import Images from './Images';
import { useMemo } from 'react';
import { useEffect } from 'react';

export default function Album() {
    const { id } = useParams()
    const li = Data.filter(x => x.id === id)

    const [useImage, setImage] = useState(li)


    console.log(useImage)

    return (
        <>
            {li.map((item) => (
                <Images key={item.id} photo={item.photo} id={item.id} />
            ))}
        </>

    )
}
