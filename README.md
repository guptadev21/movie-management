# Movie Management API

This project is a backend API for managing a collection of movies. It is built with NestJS, TypeScript, and Prisma ORM. The API provides endpoints for creating, retrieving, and rating movies.

## Features

- Add and retrieve movies with detailed information such as title, release date, description, and genre.
- Rate movies on a scale to gauge their popularity and quality.

## Tech Stack

- NestJS: A progressive Node.js framework for building efficient and scalable server-side applications.
- TypeScript: A statically typed superset of JavaScript that enhances the development experience.
- Prisma ORM: A next-generation ORM for Node.js and TypeScript.
- PostgreSQL: A powerful, open-source relational database system.
- Swagger: A tool to visualize and interact with the API’s resources.

## Setup

1. Clone the Repository:
  ```bash
  git clone https://github.com/your-username/movie-management-api.git
  cd movie-management-api
  ```

2. Install Dependencies:
  ```bash
  yarn install
  ```

3. Environment Variables:
  Create a `.env` file in the root directory and add the following environment variables:
  ```
  DATABASE_URL="postgresql://user:password@localhost:5432/moviedb?schema=public" 
  ```

## Database Setup

1. Prisma Initialization:
  Ensure that your PostgreSQL server is running. Then, initialize the Prisma schema.
  ```bash
  npx prisma migrate dev --name init
  npx prisma generate
  ```

2. PgAdmin Setup:
  Use pgAdmin to manage your PostgreSQL database. You can execute SQL scripts in pgAdmin to create and manage your tables if needed.

3. Sample Data:
  Here is some sample data to get started:
  ```sql
  INSERT INTO "Movie" (title, "releaseDate", description, genre, rating) VALUES
  ('The Shawshank Redemption', '1994-09-23', 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', 'Drama', 9.3),
  ('The Godfather', '1972-03-24', 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', 'Crime', 9.2),
  ('The Dark Knight', '2008-07-18', 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.', 'Action', 9.0);
  ```

## Running the Application

1. Start the Application:
  ```bash
  yarn start
  ```

2. Swagger UI:
  Visit `http://localhost:3000/api` to view the API documentation and interact with the endpoints.

## API Documentation

### Endpoints

#### Create a New Movie

- URL: `/movies`
- Method: `POST`
- Request Body:
  ```json
  {
  "title": "string",
  "releaseDate": "string (ISO 8601 date)",
  "description": "string",
  "genre": "string",
  "rating": "number"
  }
  ```
- Responses:
  - `201 Created`: The movie has been successfully created.
  - `400 Bad Request`: Invalid input.

#### Get All Movies

- URL: `/movies`
- Method: `GET`
- Responses:
  - `200 OK`: Returns a list of all movies.

#### Get a Movie by ID

- URL: `/movies/{id}`
- Method: `GET`
- Responses:
  - `200 OK`: Returns the movie with the specified ID.
  - `404 Not Found`: Movie not found.

#### Rate a Movie

- URL: `/movies/{id}/rate`
- Method: `PUT`
- Request Body:
  ```json
  {
  "rating": "number"
  }
  ```
- Responses:
  - `200 OK`: The movie has been successfully rated.
  - `400 Bad Request`: Invalid input.
  - `404 Not Found`: Movie not found.

### Example DTOs

**CreateMovieDto**:
```typescript
export class CreateMovieDto {
  title: string;
  releaseDate: string;
  description: string;
  genre: string;
  rating: number;
}
```

**RateMovieDto**:
```typescript
export class RateMovieDto {
  rating: number;
}
```

## Sample Data

Here is some sample data to test the API endpoints:

```json
// Create a new movie
POST /movies
{
  "title": "Inception",
  "releaseDate": "2010-07-16",
  "description": "A thief who steals corporate secrets through the use of dream-sharing technology...",
  "genre": "Sci-Fi",
  "rating": 8.8
}

// Rate a movie
PUT /movies/1/rate
{
  "rating": 9.0
}
```

## Testing the API

You can use Postman or any other API testing tool to interact with the API. Follow these steps:

1. Create a Movie:
  - Endpoint: `POST /movies`
  - Body:
    ```json
    {
    "title": "Inception",
    "releaseDate": "2010-07-16",
    "description": "A thief who steals corporate secrets through the use of dream-sharing technology...",
    "genre": "Sci-Fi",
    "rating": 8.8
    }
    ```

2. Rate a Movie:
  - Endpoint: `PUT /movies/{id}/rate`
  - Body:
    ```json
    {
    "rating": 9.0
    }
    ```

  Replace `{id}` with the actual ID of the movie you created.


