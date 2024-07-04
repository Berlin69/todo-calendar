export function daysInMonth(month: number, year: number) {
  const result: { day: number }[] = [];
  const days = new Date(year, month, 0).getDate();
  for (let i = 0; i < days; i++) {
    result.push({ day: i + 1 });
  }

  return result;
}
