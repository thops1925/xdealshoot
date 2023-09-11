import React from 'react';
import { Card } from '../components';
import { Data } from '../constant';
import { Link } from 'react-router-dom';

export default function Gallery() {
  return (
    <section className='my-2'>
      <div className='grid md:grid-cols-3 gap-1 md:mx-20 mx-10'>
        {Data.map((item) => (
          <Link to={`/album/${item.id}`} key={item.id}>
            <Card
              id={item.id}
              title={item.title}
              photo={item.photo}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
