import { getMovieBySearch } from 'api/getMovieBySearch';
import { Header } from 'components/Header/Header';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query')?? '';
 
  useEffect(() => {
    if (query) {
      getMovieBySearch(query).then(data => {
        if (data.length === 0) {
          alert('No movies found for your search query');
        } else {
          setMovies(data);
        }
      });
    }
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const searchQuery = form.query.value.trim();
    if (searchQuery === '') {
      alert('Please enter a search query');
      return setSearchParams({})
    }
    setSearchParams({ query: searchQuery });
    form.reset();
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link
                to={`/movies/${movie.id}`}
                state={{ from: location }}
              >
                {movie.title || movie.name} (
                {new Date(
                  movie.release_date || movie.first_air_date
                ).getFullYear()}
                )
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Movies;
