import React, { useState } from 'react';
import { CardTask } from '../card-task/card-task.tsx';
import cn from 'clsx';

interface CardDayProps {
  day: Date;
}

export const CardDay = ({ day }: CardDayProps) => {
  const [isOpen, setOpen] = useState(false);

  const currentDate = new Date();
  return (
    <div
      className={cn('p-2 border border-red-300 w-full rounded-xl', [
        day.getFullYear() === currentDate.getFullYear() &&
          day.getMonth() === currentDate.getMonth() &&
          day.getDate() === currentDate.getDate() &&
          'border-blue-400',
      ])}
    >
      <div className="w-full text-end">
        <div
          className={cn(
            'w-7 h-7 bg-red-300 rounded-full flex justify-center items-center ml-auto',
            [
              day.getFullYear() === currentDate.getFullYear() &&
                day.getMonth() === currentDate.getMonth() &&
                day.getDate() === currentDate.getDate() &&
                'bg-blue-400',
            ]
          )}
        >
          <span className="text-white">{day.getDate()}</span>
        </div>
      </div>
      <div className="">
        <span className="text-xs">Задачи</span>
        <div className="min-h-[102px] h-full border rounded-lg">
          <CardTask />
          <CardTask />
          {/* <CardTask /> */}
        </div>
      </div>
      <p className="">+ 6 more tasks</p>
    </div>
  );
};
