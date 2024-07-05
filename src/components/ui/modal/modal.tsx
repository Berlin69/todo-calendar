import React from 'react';
import { createPortal } from 'react-dom';
import { IconCloseCross } from '../../icons/icon-close-cross.tsx';
import { monthNamesForModal } from '../../../lib/data/month-names.ts';
import { CardTaskEditable } from '../card-task-editable/card-task-editable.tsx';
import { IconPlus } from '../../icons/icon-plus.tsx';

interface ModalProps {
  onClose: () => void;
  title?: string;
  day: Date;
  tasks: { task: string; isFinished: boolean }[];
  setTasksForDay: (array: { task: string; isFinished: boolean }[]) => void;
}

export const Modal = ({
  onClose,
  title,
  day,
  tasks,
  setTasksForDay,
}: ModalProps) => {
  const handleCloseClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  // tasks.tasks.push({ year: '2000' });

  const handleAddTask = () => {
    setTasksForDay([...tasks, { task: '', isFinished: false }]);
  };

  return (
    <div
      onClick={onClose}
      className="bg-plt-primary/80 backdrop-blur-sm absolute top-0 left-0 right-0 bottom-0 z-10 animate-fade-in"
    >
      {createPortal(
        <div
          onClick={handleCloseClick}
          className="h-fit w-96 p-3 m-auto absolute top-0 left-0 right-0 bottom-0 z-20 text-white border border-plt-accent/40 rounded-md bg-plt-primary animate-fade-in"
        >
          <div className="flex justify-between">
            <p className="font-medium text-plt-white/50 flex">
              Задачи на{' '}
              <span className="bg-plt-accent/20 rounded-full ml-2 px-3 text-plt-white">
                {day.getDate()} {monthNamesForModal[day.getMonth()]}{' '}
                {day.getFullYear()}
              </span>
            </p>
            <button onClick={onClose}>
              <IconCloseCross />
            </button>
          </div>
          <div className="border border-plt-accent/20 rounded-md mt-5 min-h-[200px] max-h-[600px] overflow-y-scroll card-wrapper">
            {tasks &&
              tasks.map((task, index: number) => (
                <CardTaskEditable
                  key={task.task}
                  taskIndex={index}
                  task={task}
                  allTasks={tasks}
                  setTasksForDay={setTasksForDay}
                />
              ))}
          </div>
          <button
            onClick={handleAddTask}
            className="flex justify-center items-center w-full bg-plt-accent rounded-full mt-5 py-3 gap-2"
          >
            <IconPlus size={20} /> Добавить новую задачу
          </button>
        </div>,
        document.body
      )}
    </div>
  );
};
