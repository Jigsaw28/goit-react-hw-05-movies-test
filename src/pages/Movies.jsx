import { getMovieBySearch } from 'api/getMovieBySearch';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Container, MovieItem, MovieLink, MovieList } from './Home.styled';
import { SearchButton, SearchForm, SearchInput } from './Movies.styled';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query) {
      setLoading(true);
      getMovieBySearch(query).then(data => {
        if (data.length === 0) {
          alert('No movies found for your search query');
        } else {
          setMovies(data);
        }
      }).finally(() => {
        setLoading(false);
      });
    }
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const searchQuery = form.query.value.trim();
    if (searchQuery === '') {
      alert('Please enter a search query');
      return setSearchParams({});
    }
    setSearchParams({ query: searchQuery });
    form.reset();
  };

  return (
    <>
      <Container>
        <SearchForm onSubmit={handleSubmit}>
          <SearchInput
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
          <SearchButton type="submit">Search</SearchButton>
        </SearchForm>
        <MovieList>
          {!loading ? (
            movies.map(movie => {
              return (
                <MovieItem key={movie.id}>
                  <MovieLink
                    to={`/movies/${movie.id}`}
                    state={{ from: location }}
                  >
                    {movie.title || movie.name} (
                    {new Date(
                      movie.release_date || movie.first_air_date
                    ).getFullYear()}
                    )
                  </MovieLink>
                </MovieItem>
              );
            })
          ) : (
            <Loader />
          )}
        </MovieList>
      </Container>
    </>
  );
};
export default Movies;
