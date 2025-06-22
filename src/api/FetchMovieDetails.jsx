import axios from 'axios';
const API_KEY = '9f234b00a323f5ab16274541e59c6da6';
export const fetchMovieDetails = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );
    const movieDetails = await response.data;
    return movieDetails;
  } catch (error) {
    console.log(error.message);
  }
};
