import axios from 'axios';

const APi_KEY = '9f234b00a323f5ab16274541e59c6da6';

export const getMovieReviews = async movieId => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
      {
        params: {
          api_key: APi_KEY,
        },
      }
      );
      const data = await res.data.results;
      return data;
   
  } catch (error) {
    console.log(error.message);
  }
};
