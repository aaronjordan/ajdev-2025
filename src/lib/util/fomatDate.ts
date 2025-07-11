const months = Object.freeze({
  "01": "jan",
  "02": "feb",
  "03": "mar",
  "04": "apr",
  "05": "may",
  "06": "jun",
  "07": "jul",
  "08": "aug",
  "09": "sep",
  "10": "oct",
  "11": "nov",
  "12": "dec",
});

type DateFormat = "short" | "full" | "year";

/**
 * Formats the YYMMDD `dateCode`:
 * - short: oct 3
 * - full: oct 3, 2025
 * - year: 2025
 */
export function formatDate(dateCode: string, format: DateFormat = "full") {
  if (dateCode.length !== 6) throw TypeError(`Invalid date code: ${dateCode}`);
  const year = dateCode.slice(0, 2);
  const month = dateCode.slice(2, 4) as keyof typeof months;
  if (!(month in months)) throw TypeError(`Invalid value for month: ${month}`);
  const day = dateCode.slice(4, 6);

  switch (format) {
    case "short":
      return `${months[month]} ${day}`;
    case "year":
      return year;
    default: // "full"
      return `${months[month]} ${day}, 20${year}`;
  }
}
