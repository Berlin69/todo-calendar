const tasks = [
  {
    year: '2024',
    tasks: [
      {
        month: '6',
        tasks: [
          {
            day: '5',
            tasks: [
              'Доделать задачи',
              'Оформить внешний вид',
              'Поспать',
              'Сдать тестовое',
            ],
          },
          {
            day: '6',
            tasks: ['Поспать', 'Сдать тестовое'],
          },
          {
            day: '17',
            tasks: ['Найти работу'],
          },
        ],
      },
    ],
  },
  {
    year: '2025',
    tasks: [
      {
        month: '6',
        tasks: [
          {
            day: '5',
            tasks: ['Доделать задачи', 'Оформить внешний вид'],
          },
        ],
      },
    ],
  },
];

const storage = window.localStorage;

storage.setItem('tasks', JSON.stringify(tasks));

export const getTasks = () => {
  const storedTasks = JSON.parse(storage.getItem('tasks')!);
  return storedTasks;
};

export const getCurrentDayTasks = (
  year: number,
  month: number,
  day: number
) => {
  const storedTasks = getTasks();
  let currentDayTasks = {};
  if (storedTasks) {
    currentDayTasks = storedTasks
      ?.find((taskYear) => taskYear.year === year.toString())
      ?.tasks?.find((taskMonth) => taskMonth?.month === month.toString())
      .tasks.find((taskDay) => taskDay?.day === day.toString());

    return currentDayTasks.tasks;
  } else {
    currentDayTasks.tasks = [];
    return currentDayTasks.tasks;
  }
};
