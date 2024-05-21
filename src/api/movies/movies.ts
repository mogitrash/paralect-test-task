import axiosInstance from '../axios';

export const getAllMovies = () => {
  axiosInstance
    .get('https://api.themoviedb.org/3/discover/movie?page=1')
    .then((res) => console.log(res.data));
};

export const getMovieById = () => {};
