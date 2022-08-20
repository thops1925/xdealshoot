import React, { useState } from 'react';
import { Album, Card } from '../components';
import { Data } from '../constant';
// import { Link } from 'react-router-dom';



export default function Gallery() {
    const [isSlideOpen, setSlideOpen] = useState(true);
    const [isItem, setItem] = useState([]);

    const slideOpen = () => {
        setSlideOpen(!isSlideOpen);
    };
    return (
        <section>
            {isSlideOpen ? (
                <div className='grid md:grid-cols-3 gap-1 md:mx-20 mx-10 mb-10'>
                    {Data.map((item, index) => (
                        // <Link to='/Gallery/Card'>
                        <Card slideOpen={slideOpen} key={index} id={item.id} title={item.title} photo={item.photo} setItem={setItem} />

                        // </Link>
                    ))}
                </div>
            ) : (
                <Album photo={isItem} />
            )}
        </section>
    );
}
