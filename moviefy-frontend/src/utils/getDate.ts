export function getDate(date: string, separator: string = "/") {
  if (date) {
    const [year, month, day] = date.split("-");
    return [day, month, year].join(separator);
  }
  return "-";
}
