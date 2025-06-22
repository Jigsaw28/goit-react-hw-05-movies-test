import axios from 'axios';
const API_KEY = '9f234b00a323f5ab16274541e59c6da6';

export const getMovieBySearch = async searchQuery => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie`,
      {
        params: {
          api_key: API_KEY,
          query: searchQuery,
        },
      }
      );
    const movies = await response.data.results;
    return movies;
  } catch (error) {
    console.log(error.message);
  }
}