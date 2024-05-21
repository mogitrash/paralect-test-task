import { MovieDTO } from '../../api/movies';
import { RequestStatus } from '../../common/request-status.model';

export interface MoviesState {
  movies: MovieDTO[];
  requestStatus: RequestStatus;
}
