import { getMovieReviews } from 'api/getMovieReviews';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Author,
  Content,
  NoReviews,
  ReviewItem,
  ReviewsList,
} from './Reviews.styled';
import { Loader } from 'components/Loader/Loader';
import { onScroll } from 'utils/scroll';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovieReviews(movieId)
      .then(data => {
        setReviews(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  useEffect(() => {
    if (!loading && reviews.length >= 0) {
      onScroll();
    } else {
      return;
    }
  }, [loading, reviews]);

  return (
    <ReviewsList className="Reviews">
      {!loading ? (
        reviews.length ? (
          reviews.map(review => {
            return (
              <ReviewItem key={review.id}>
                <Author>{review.author}</Author>
                <Content>{review.content}</Content>
              </ReviewItem>
            );
          })
        ) : (
          <NoReviews>We dont't have any reviews for this movie.</NoReviews>
        )
      ) : (
        <Loader />
      )}
    </ReviewsList>
  );
};

export default Reviews;
