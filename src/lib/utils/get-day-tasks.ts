export const getDayTasks = (year, month, day) => {
  // let data = require('../data/tasks.json');
  let data = require('../data/task.json').tasks;
  const stringYear = year.toString();
  const stringMonth = month.toString();
  const stringDay = day.toString();
  console.log('stringMonth', stringMonth);
  const filteredByYear = data?.find((item) => item.year === stringYear);
  const filteredByMonth = filteredByYear?.tasks?.find(
    (month) => month.month === stringMonth
  );
  const filteredByDay = filteredByMonth?.tasks?.find(
    (day) => day.day === stringDay
  );
  // console.log('filteredByMonth', filteredByMonth);
  if (filteredByDay?.tasks !== undefined) {
    return filteredByDay?.tasks;
  } else return [];
};
