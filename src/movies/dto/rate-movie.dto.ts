import { ApiProperty } from '@nestjs/swagger';

export class RateMovieDto {
  @ApiProperty({ example: 8.5 })
  rating: number;
}
