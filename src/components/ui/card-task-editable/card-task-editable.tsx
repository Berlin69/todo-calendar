import React, { useState } from 'react';
import { IconCloseCross } from '../../icons/icon-close-cross.tsx';
import { IconEdit } from '../../icons/icon-edit.tsx';
import { IconDone } from '../../icons/icon-done.tsx';

export const CardTaskEditable = () => {
  const [isEditing, setEditing] = useState(false);
  const [value, setValue] = useState('task');

  const initialValue = 'task';

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelClick = () => {
    setValue(initialValue);
    setEditing(false);
  };

  const handleSaveClick = () => {
    setEditing(false);
  };

  return (
    <div className="m-2 p-2 flex justify-between items-center bg-plt-accent/60 rounded-md">
      <input
        className="w-full bg-transparent outline-none"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        readOnly={!isEditing}
      />
      <div>
        {isEditing ? (
          <div className="flex gap-1">
            <button onClick={handleSaveClick}>
              <IconDone size={20} />
            </button>
            <button onClick={handleCancelClick}>
              <IconCloseCross size={20} />
            </button>
          </div>
        ) : (
          <button onClick={handleEditClick}>
            <IconEdit size={16} />
          </button>
        )}
      </div>
    </div>
  );
};
