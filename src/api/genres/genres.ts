import axiosInstance from '../axios';
import { GenreDTO, GetAllGenresRequestDTO } from './genres.model';

export const getAllGenres = async (params?: GetAllGenresRequestDTO): Promise<GenreDTO[]> => {
  const response = await axiosInstance.get('3/genre/movie/list', { params });
  return response.data.genres;
};
