import { fetchMovieDetails } from 'api/FetchMovieDetails';
import { Header } from 'components/Header/Header';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState('');
  const backLinkLocationRefs = useRef(location.state?.from ?? '/');

  useEffect(() => {
    fetchMovieDetails(movieId).then(data => {
      setMovie(data);
    });
  }, [movieId]);

  return (
    <>
      <Header />
      <Link to={backLinkLocationRefs.current}>Go back</Link>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <h1>{movie.title}</h1>
        <p>User score: {Math.round((movie.vote_average * 100) / 10)}%</p>
        <p>Overview: {movie.overview}</p>
        <ul>
          Genres:{' '}
          {movie.genres &&
            movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </ul>
      </div>
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to={`cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`reviews`}>Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};
