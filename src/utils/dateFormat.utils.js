/**
 * Returns the number of full years elapsed since a given date.
 *
 * @param {string} dateString - ISO date string (e.g. "2018-06-01")
 * @returns {number}
 *
 * @example
 * yearsSince("2018-06-01"); // 7
 */
export const yearsSince = (dateString) => {
  const start = new Date(dateString);
  const now = new Date();
  return (
    now.getFullYear() -
    start.getFullYear() -
    (now < new Date(now.getFullYear(), start.getMonth(), start.getDate())
      ? 1
      : 0)
  );
};

/**
 * Formats a date string as "Mon YYYY".
 *
 * @param {string} dateString - ISO date string (e.g. "2022-08-01")
 * @returns {string}
 *
 * @example
 * formatMonthYear("2022-08-01"); // "Aug 2022"
 */
export const formatMonthYear = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
};

/**
 * Returns a human-readable duration between two dates (e.g. "2 years, 3 months").
 * Pass `new Date()` as end_date for a running duration (current role).
 *
 * @param {string|Date} start_date - Start of the period
 * @param {string|Date} end_date   - End of the period
 * @returns {string}
 *
 * @example
 * DateCalc("2020-01-01", "2022-04-01"); // "2 years, 4 months"
 * DateCalc("2023-03-01", new Date());   // e.g. "2 years, 2 months"
 */
export const DateCalc = (start_date, end_date) => {
  const start = new Date(start_date);
  const end = new Date(end_date);

  if (isNaN(start.getTime()) || isNaN(end.getTime())) return "";

  const monthsDiff =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1;

  if (monthsDiff <= 0) return "< 1 month";

  const years = Math.floor(monthsDiff / 12);
  const months = Math.floor(monthsDiff % 12);

  if (years === 0) {
    return months === 1 ? "1 month" : `${months} months`;
  }

  const yearStr = years === 1 ? "1 year" : `${years} years`;
  if (months === 0) return yearStr;
  const monthStr = months === 1 ? "1 month" : `${months} months`;
  return `${yearStr}, ${monthStr}`;
};
