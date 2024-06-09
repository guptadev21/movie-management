import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [MoviesModule, PrismaModule],
})
export class AppModule {}
