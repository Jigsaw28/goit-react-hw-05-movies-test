import { getMovieCredit } from 'api/getMovieCredit';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    getMovieCredit(movieId).then(data => {
      setCast(data.cast);
    });
  }, [movieId]);

  return (
    <ul>
      {cast.map(el => {
        return (
          <li key={el.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
              alt={el.name}
              width="100"
            />
            <p>{el.name}</p>
            <p>Character: {el.character}</p>
          </li>
        );
      })}
    </ul>
  );
};
