import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';
const API_KEY = '9352ea579938defd17703c73371a6a76';

export const fetchTrends = async () => {
  const data = await axios.get(
    `3/trending/movie/day?language=en-US&api_key=${API_KEY} `
  );
  return data.data.results;
};

export const fetchMovieDetails = async id => {
  const data = await axios.get(
    `3/movie/${id}?language=en-US&api_key=${API_KEY}`
  );
  return data.data;
};

export const fetchMovies = async movie => {
  const data = await axios.get(
    `3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`
  );
  return data.data.results;
};

export const fetchCast = async id => {
  const data = await axios.get(
    `3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data.data.cast;
};

export const fetchReviews = async id => {
  const data = await axios.get(
    `3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return data.data.results;
};