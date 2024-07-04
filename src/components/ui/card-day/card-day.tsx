import React, { useState } from 'react';
import { CardTask } from '../card-task/card-task.tsx';
import cn from 'clsx';
import { Modal } from '../modal/modal.tsx';

interface CardDayProps {
  day: Date;
}

export const CardDay = ({ day }: CardDayProps) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpenClick = () => {
    setOpen(true);
  };

  const handleCloseClick = () => {
    setOpen(false);
  };

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
          ]
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
          <div className="min-h-[102px] h-full border border-plt-accent/40 rounded-lg">
            <CardTask />
            <CardTask />
            {/* <CardTask /> */}
          </div>
        </div>
        <p className="">+ 6 more tasks</p>
      </div>
      {isOpen && <Modal onClose={handleCloseClick} day={day} />}
    </React.Fragment>
  );
};
