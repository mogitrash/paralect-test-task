import axiosInstance from '../axios';
import { MovieDTO, GetAllMoviesResponseDTO, GetAllMoviesRequestDTO } from './movies.model';

export const getAllMovies = async (
  params: GetAllMoviesRequestDTO,
): Promise<GetAllMoviesResponseDTO> => {
  const response = await axiosInstance.get('3/discover/movie', {
    params,
  });
  return response.data;
};

export const getMovieById = async (id: number): Promise<MovieDTO> => {
  const response = await axiosInstance.get(`3/movie/${id}`, {
    params: {
      language: 'en-US',
    },
  });

  return response.data;
};
