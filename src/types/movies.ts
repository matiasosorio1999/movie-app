export interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Year: string;
  Type: string;
}

export interface MovieDetails extends Movie {
  Plot: string;
  imdbRating: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Actors: string;
  Writer: string;
}
