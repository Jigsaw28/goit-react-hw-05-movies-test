import { getMovieReviews } from 'api/getMovieReviews';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(data => {
      setReviews(data);
    });
  }, [movieId]);
  return (
    <ul>
      {reviews.length
        ? reviews.map(review => {
            return (
              <li key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })
        : "We dont't have any reviews for this movie."}
    </ul>
  );
};
