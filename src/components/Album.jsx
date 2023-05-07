import React from 'react';
import { useParams } from 'react-router-dom';
import { Data } from '../constant';
import Images from './Images';
export default function Album() {
    let { id } = useParams()
    const li = Data.filter(x => x.id === id)
    return (
        <div key={id}>
            {li.map((item) => (
                <Images key={item.id} id={item.id} photo={item.photo} />
            ))}
        </div>

    )
}
