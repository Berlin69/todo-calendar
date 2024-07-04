import React from 'react';
import { createPortal } from 'react-dom';
import { IconCloseCross } from '../../icons/icon-close-cross.tsx';
import { monthNames } from '../../../lib/data/month-names.ts';
import { CardTaskEditable } from '../card-task-editable/card-task-editable.tsx';
import { IconPlus } from '../../icons/icon-plus.tsx';

interface ModalProps {
  onClose: () => void;
  title?: string;
  day: Date;
}

export const Modal = ({ onClose, title, day }: ModalProps) => {
  const handleCloseClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    console.log('Clicked!');
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
              <p className="bg-plt-accent/20 rounded-full ml-2 px-3 text-plt-white">
                {day.getDate()} {monthNames[day.getMonth()]} {day.getFullYear()}
              </p>
            </p>
            <button onClick={onClose}>
              <IconCloseCross />
            </button>
          </div>
          <div className="border border-plt-accent/20 rounded-md mt-5 min-h-[200px] max-h-[600px]">
            <CardTaskEditable />
          </div>
          <button className="flex justify-center items-center w-full bg-plt-accent rounded-md mt-5 py-3 gap-2">
            <IconPlus size={20} /> Добавить новую задачу
          </button>
        </div>,
        document.body
      )}
    </div>
  );
};
