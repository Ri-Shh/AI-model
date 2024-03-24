import React, { useEffect, useState } from 'react'
import { Rating } from 'react-simple-star-rating';
import axios from 'axios';

export default function RatingComponent({ id }) {
  const [_, setRating] = useState(0);

  // Catch Rating value
  const handleRating = async (rate) => {
    setRating(rate);
    await axios.patch('https://ai-model-api.azurewebsites.net/'+`/api/models/${id}`, {rating: rate},
    {headers: {
      Authorization: `Bearer ${cookie['token']}` // Include the access token in the Authorization header
    }})
    .then(response => {
      console.log(response.data);
    })
    .catch(e => {
      console.log(`Error in fetching model: ${e}`);
    });
  }

  return (
    <div className='App'>
      <Rating
        onClick={handleRating}
      />
    </div>
  )
}