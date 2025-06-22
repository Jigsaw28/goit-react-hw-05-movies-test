import axios from 'axios';

const APi_KEY = '9f234b00a323f5ab16274541e59c6da6';

export const getTrendingMovies = async () => {
  try {
    const res = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day',
      {
        params: {
          api_key: APi_KEY,
        },
      }
    );
    const movies = await res.data.results;
    return movies;
  } catch (error) {
    console.log(error.message);
  }
};
