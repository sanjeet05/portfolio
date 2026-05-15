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

export const formatMonthYear = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
};

export const DateCalc = (start_date, end_date) => {
  const start = new Date(start_date);
  const end = new Date(end_date);

  const monthsDiff =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1;

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
