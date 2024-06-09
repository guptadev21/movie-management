import { IsString, IsISO8601, IsNumber, IsOptional } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  title: string;

  @IsISO8601()
  releaseDate: string;

  @IsString()
  description: string;

  @IsString()
  genre: string;

  @IsNumber()
  @IsOptional()
  rating?: number;
}
