import { ProductionCompany } from '../store/movies/movies.model';
import { MoviePreview } from './movie-preview.model';

export interface MovieDetailsView extends MoviePreview {
  description: string;
  duration: string;
  budget: string;
  production: ProductionCompany[];
  premiere: string;
}
