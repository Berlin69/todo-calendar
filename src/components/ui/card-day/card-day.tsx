import React, { useEffect, useState } from 'react';
import { CardTask } from '../card-task/card-task.tsx';
import cn from 'clsx';
import { Modal } from '../modal/modal.tsx';
import { getDayTasks } from '../../../lib/utils/get-day-tasks.ts';
import { useCalendarStore } from '../../../lib/stores/calendar-store.tsx';

interface CardDayProps {
  day: Date;
}

export const CardDay = ({ day }: CardDayProps) => {
  const currentMonth = useCalendarStore((state) => state.selectedMonth);
  const currentYear = useCalendarStore((state) => state.selectedYear);

  const [isOpen, setOpen] = useState(false);
  const [tasksForDay, setTasksForDay] = useState<
    { task: string; isFinished: boolean }[]
  >([]);

  // console.log('currentMonth', currentMonth);
  // console.log('currentYear', currentYear);

  useEffect(() => {
    const dayTasks = getDayTasks(currentYear, currentMonth, day.getDate());
    setTasksForDay(dayTasks);
  }, [currentMonth, currentYear, day]);

  const handleOpenClick = () => {
    setOpen(true);
  };

  const handleCloseClick = () => {
    setOpen(false);
  };

  console.log(day.getDay());

  const currentDate = new Date();
  return (
    <React.Fragment>
      <div
        onClick={handleOpenClick}
        className={cn(
          'p-2 bg-plt-secondary border border-plt-accent/20 w-full rounded-xl cursor-pointer',
          [
            day.getFullYear() === currentDate.getFullYear() &&
              day.getMonth() === currentDate.getMonth() &&
              day.getDate() === currentDate.getDate() &&
              '!bg-plt-accent/10',
          ],
          [day.getDay() === 6 && 'bg-purple-400/20'],
          [day.getDay() === 0 && 'bg-purple-400/20']
        )}
      >
        <div className="w-full text-end">
          <div
            className={cn(
              'w-7 h-7 bg-plt-accent/40 rounded-full flex justify-center items-center ml-auto',
              [
                day.getFullYear() === currentDate.getFullYear() &&
                  day.getMonth() === currentDate.getMonth() &&
                  day.getDate() === currentDate.getDate() &&
                  '!bg-plt-accent/100',
              ]
            )}
          >
            <span className="text-white">{day.getDate()}</span>
          </div>
        </div>
        <div className="">
          <span className="text-xs">Задачи</span>
          <div className="min-h-[95px] h-full border border-plt-accent/40 rounded-lg p-1">
            {tasksForDay &&
              tasksForDay.map((task: any, index: number) => {
                if (index < 3) {
                  return <CardTask key={task} task={task} />;
                }
                return [];
              })}
            {/* <CardTask /> */}
          </div>
        </div>
        <div className="h-[24px]">
          {tasksForDay?.length > 2 && (
            <p className="">+ еще {tasksForDay.length - 3} задач(а)</p>
          )}
        </div>
      </div>
      {isOpen && (
        <Modal
          onClose={handleCloseClick}
          day={day}
          tasks={tasksForDay}
          setTasksForDay={setTasksForDay}
        />
      )}
    </React.Fragment>
  );
};
