import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Data } from '../constant';
import Images from './Images';

export default function Album() {
    const { id } = useParams()
    const li = Data.filter(x => x.id === id)
    return (
        <>
            {li.map((item) => (
                <Images key={item.id} photo={item.photo} id={item.id} />
            ))}
        </>

    )
}
