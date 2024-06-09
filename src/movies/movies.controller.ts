import { Controller, Get, Post, Body, Param, Query, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateMovieDto } from './dto/create-movie.dto';
import { RateMovieDto } from './dto/rate-movie.dto'; // Add this import
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

@ApiTags('movies')
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new movie' })
  @ApiResponse({ status: 201, description: 'The movie has been successfully created.', type: Movie })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all movies' })
  @ApiResponse({ status: 200, description: 'Return all movies.', type: [Movie] })
  findAll() {
    return this.moviesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a movie by ID' })
  @ApiResponse({ status: 200, description: 'Return a movie.', type: Movie })
  @ApiResponse({ status: 404, description: 'Movie not found.' })
  findOne(@Param('id') id: string) {
    return this.moviesService.findOne(+id);
  }

  @Put(':id/rate')
  @ApiOperation({ summary: 'Rate a movie' })
  @ApiResponse({ status: 200, description: 'The movie has been successfully rated.', type: Movie })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 404, description: 'Movie not found.' })
  rateMovie(@Param('id') id: string, @Body() rateMovieDto: RateMovieDto) {
    return this.moviesService.rateMovie(+id, rateMovieDto);
  }

  // Additional methods like filter by genre, sort by rating, etc.
}
