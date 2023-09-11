import React from 'react';
import { useParams } from 'react-router-dom';
import { Data } from '../constant';
import Images from './Images';

export default function Album() {
  const { id } = useParams();
  const albumData = Data.find((item) => item.id === id);

  if (!albumData) {
    // Handle the case where the album with the specified ID is not found.
    return <div>Album not found</div>;
  }

  return (
    <div>
      <Images photo={albumData.photo} />
    </div>
  );
}
