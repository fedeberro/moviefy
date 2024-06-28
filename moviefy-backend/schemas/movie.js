import z from "zod";

const movieGenreSchema = z.object({
  id: z.number().int(),
  name: z.string(),
});

export const movieSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  poster_path: z.string(),
  vote_average: z.number().min(0).max(10),
  genres: z.array(movieGenreSchema),
});

export function validateMovieObject(object) {
  return movieSchema.safeParse(object);
}

export function validateMovieObjectPartial(object) {
  return movieSchema.partial().safeParse(object);
}
