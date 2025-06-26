import { getMovieCredit } from 'api/getMovieCredit';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  CastCharacter,
  CastImg,
  CastItem,
  CastList,
  CastName,
} from './Cast.styled';
import { Loader } from 'components/Loader/Loader';
import { onScroll } from 'utils/scroll';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getMovieCredit(movieId)
      .then(data => {
        setCast(data.cast);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  useEffect(() => {
    if (!loading && cast.length > 0) {
      onScroll();
    }
  }, [loading, cast]);

  return (
    <CastList className="Cast">
      {!loading ? (
        cast.map(el => {
          return (
            <CastItem key={el.id}>
              <CastImg
                src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
                alt={el.name}
                width="100"
              />
              <CastName>{el.name}</CastName>
              <CastCharacter>Character: {el.character}</CastCharacter>
            </CastItem>
          );
        })
      ) : (
        <Loader />
      )}
    </CastList>
  );
};

export default Cast;
