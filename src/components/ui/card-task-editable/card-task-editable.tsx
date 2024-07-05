import React, { useLayoutEffect, useRef, useState } from 'react';
import { IconCloseCross } from '../../icons/icon-close-cross.tsx';
import { IconEdit } from '../../icons/icon-edit.tsx';
import { IconDone } from '../../icons/icon-done.tsx';
import cn from 'clsx';
import { IconFinished } from '../../icons/icon-finished.tsx';
import { IconTrash } from '../../icons/icon-trash.tsx';

interface CardTaskProps {
  task: { task: string; isFinished: boolean };
  taskIndex: number;
  allTasks: { task: string; isFinished: boolean }[];
  setTasksForDay: (array: { task: string; isFinished: boolean }[]) => void;
}

export const CardTaskEditable = ({
  task,
  taskIndex,
  allTasks,
  setTasksForDay,
}: CardTaskProps) => {
  const [isEditing, setEditing] = useState(false);
  const [value, setValue] = useState(task.task);
  const [isFinished, setFinished] = useState(task.isFinished);

  const ref = useRef<HTMLInputElement>(null);
  const initialValue = task.task;

  const handleEditClick = () => {
    setEditing(true);
    ref?.current?.focus();
  };

  const handleCancelClick = () => {
    setValue(initialValue);
    setEditing(false);
  };

  const handleSaveClick = () => {
    allTasks[taskIndex].task = value;
    setEditing(false);
  };

  const handleFinishClick = () => {
    task.isFinished = true;
    setFinished(true);
  };

  const handleDelete = () => {
    setTasksForDay(allTasks.filter((task) => task.task !== value));
  };

  return (
    <div className="m-2 p-2 flex justify-between items-center bg-plt-accent/60 rounded-md">
      <input
        ref={ref}
        className={cn('w-full bg-transparent outline-none', [
          isFinished && 'line-through text-plt-white/40',
        ])}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        readOnly={!isEditing}
        placeholder="Напишите задачу"
      />
      <div>
        {isEditing ? (
          <div className="flex gap-1">
            <button title="Сохранить изменения" onClick={handleSaveClick}>
              <IconDone size={20} />
            </button>
            <button title="Отменить изменения" onClick={handleCancelClick}>
              <IconCloseCross size={20} />
            </button>
          </div>
        ) : task.isFinished ? (
          <div className="flex gap-1">
            <button title="Удалить задачу" onClick={handleDelete}>
              <IconTrash size={16} />
            </button>
          </div>
        ) : (
          <div className="flex gap-1">
            <button title="Завершить задачу" onClick={handleFinishClick}>
              <IconFinished size={16} />
            </button>
            <button title="Изменить задачу" onClick={handleEditClick}>
              <IconEdit size={16} />
            </button>
            <button title="Удалить задачу" onClick={handleDelete}>
              <IconTrash size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
