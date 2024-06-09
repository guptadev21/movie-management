import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Assume you have Prisma service for database interaction
import { CreateMovieDto } from './dto/create-movie.dto';
import { RateMovieDto } from './dto/rate-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    return this.prisma.movie.create({
      data: createMovieDto,
    });
  }

  async findAll(): Promise<Movie[]> {
    return this.prisma.movie.findMany();
  }

  async findOne(id: number): Promise<Movie> {
    const movie = await this.prisma.movie.findUnique({ where: { id } });
    if (!movie) {
      throw new NotFoundException('Movie not found');
    }
    return movie;
  }

  async rateMovie(id: number, rateMovieDto: RateMovieDto): Promise<Movie> {
    const movie = await this.prisma.movie.findUnique({ where: { id } });
    if (!movie) {
      throw new NotFoundException('Movie not found');
    }
    // Update the movie's rating. For simplicity, we'll set it directly.
    return this.prisma.movie.update({
      where: { id },
      data: { rating: rateMovieDto.rating },
    });
  }
}
