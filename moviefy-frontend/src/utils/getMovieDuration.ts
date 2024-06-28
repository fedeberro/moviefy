export function getMovieDuration(duration: number) {
  const hours = Math.floor(duration / 60);
  const minutes = duration - hours * 60;
  return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
}
