import React from 'react';
import cn from 'clsx';

interface CardTaskProps {
  task: { task: string; isFinished: boolean };
}

export const CardTask = ({ task }: CardTaskProps) => {
  return (
    <div className="px-0.5 py-0.5 group">
      <p
        className={cn(
          'px-1 whitespace-nowrap text-ellipsis overflow-hidden w-full bg-plt-accent rounded-md',
          [task.isFinished && 'line-through']
        )}
        title={task.task}
      >
        {task.task}
      </p>
    </div>
  );
};
