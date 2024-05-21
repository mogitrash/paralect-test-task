import { RequestStatus } from '../../common/request-status.model';

export type GenresObjectMap = {
  [key: number]: string;
};

export interface GenresState {
  genresMap: GenresObjectMap;
  requestStatus: RequestStatus;
}
