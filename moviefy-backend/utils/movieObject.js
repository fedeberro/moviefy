export function formatMovieObject(movie) {
  const { title, id, poster_path, vote_average, genres } = movie;
  return { title, id, poster_path, vote_average, genres };
}
