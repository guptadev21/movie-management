import { ApiProperty } from '@nestjs/swagger';

export class Movie {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Inception' })
  title: string;

  @ApiProperty({ example: '2010-07-16T00:00:00.000Z' })
  releaseDate: Date;

  @ApiProperty({ example: 'A thief who steals corporate secrets through the use of dream-sharing technology...' })
  description: string;

  @ApiProperty({ example: 'Sci-Fi' })
  genre: string;

  @ApiProperty({ example: 8.8 })
  rating: number;
}
