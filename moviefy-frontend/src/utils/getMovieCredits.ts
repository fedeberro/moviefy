import { Credits } from "@/interfaces/apiResults";

export function getMovieCredits(credits: Credits) {
  const filteredCredits = credits.crew.filter(
    (credit) =>
      credit.job === "Director" ||
      credit.job === "Writer" ||
      credit.job === "Screenplay" ||
      credit.job === "Original Music Composer"
  );

  const creditList = filteredCredits.map((credit) => ({
    name: credit.name,
    credit: credit.job,
  }));

  const visited: string[] = [];
  return creditList
    .map((credit) => {
      const jobs: string[] = [];
      if (!visited.includes(credit.name)) {
        visited.push(credit.name);
        jobs.push(credit.credit);
        creditList.forEach((compareCredit) => {
          if (
            compareCredit.name === credit.name &&
            credit.credit !== compareCredit.credit
          ) {
            jobs.push(compareCredit.credit);
          }
        });
        return { name: credit.name, credit: jobs.join(", ") };
      }
    })
    .filter((credit) => credit);
}
