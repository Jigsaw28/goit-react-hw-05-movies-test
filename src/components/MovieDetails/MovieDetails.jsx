import { fetchMovieDetails } from 'api/FetchMovieDetails';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  BackLink,
  DetailsSection,
  Poster,
  Wrapper,
  Title,
  Info,
  Score,
  Overview,
  GenresList,
  Genre,
  AdditionalSection,
  AdditionalTitle,
  AdditionalList,
  AdditionalLink,
} from './MovieDetails.styled';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState('');
  const [loading, setLoading] = useState(false);
  const backLinkLocationRefs = useRef(location.state?.from ?? '/');

  useEffect(() => {
    setLoading(true);
    fetchMovieDetails(movieId)
      .then(data => {
        setMovie(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  return (
    <>
      <Wrapper>
        {loading ? (
          <Loader />
        ) : (
          <>
            <BackLink to={backLinkLocationRefs.current}>Go back</BackLink>
            <DetailsSection>
              <Poster
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <Info>
                <Title>{movie.title}</Title>
                <Score>
                  User score: {Math.round((movie.vote_average * 100) / 10)}%
                </Score>
                <Overview>Overview: {movie.overview}</Overview>
                <div>
                  Genres:
                  <GenresList>
                    {movie.genres &&
                      movie.genres.map(genre => (
                        <Genre key={genre.id}>{genre.name}</Genre>
                      ))}
                  </GenresList>
                </div>
              </Info>
            </DetailsSection>
            <AdditionalSection>
              <AdditionalTitle>Additional information</AdditionalTitle>
              <AdditionalList>
                <li>
                  <AdditionalLink to={`cast`}>Cast</AdditionalLink>
                </li>
                <li>
                  <AdditionalLink to={`reviews`}>Reviews</AdditionalLink>
                </li>
              </AdditionalList>
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </AdditionalSection>
          </>
        )}
      </Wrapper>
    </>
  );
};

export default MovieDetails;
