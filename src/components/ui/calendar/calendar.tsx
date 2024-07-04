import React, { useState } from 'react';
import { monthNames } from '../../../lib/data/month-names.ts';
import { createEmptyArray } from '../../../lib/utils/create-empy-array.ts';
import { IconArrowLeft } from '../../icons/icon-arrow-left.tsx';
import { IconArrowRight } from '../../icons/icon-arrow-right.tsx';
import { CardDay } from '../card-day/card-day.tsx';

export const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  // массив с днями недели
  const weekDays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  // Получаем певый день текущего месяца
  const firstDay = new Date(currentYear, currentMonth, 1);

  // делаем массив "пустых" дат
  const emptyDays = createEmptyArray(firstDay.getDay());

  // Получаем массив дат текущего месяца
  const monthDays = Array.from(
    { length: new Date(currentYear, currentMonth + 1, 0).getDate() },
    (item, i) => {
      console.log(i);
      return new Date(currentYear, currentMonth, i + 1);
    }
  );

  // предыдущий/следующий месяц
  const handleDecreaseMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };
  const handleIncreaseMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // предыдущий/следующий год
  const handleDecreaseYear = () => {
    setCurrentYear(currentYear - 1);
  };
  const handleIncreaseYear = () => {
    setCurrentYear(currentYear + 1);
  };

  return (
    <div className="p-5">
      <div className="flex justify-center gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={handleDecreaseMonth}
            className="p-1 rounded-full bg-plt-accent flex items-center justify-center"
          >
            <IconArrowLeft size={16} stroke="#fff" />
          </button>
          <h2 className="text-center text-xl text-white bg-plt-accent/20 rounded-full px-2 min-w-40">
            {monthNames[currentMonth]}
          </h2>
          <button
            onClick={handleIncreaseMonth}
            className="p-1 rounded-full bg-plt-accent flex items-center justify-center"
          >
            <IconArrowRight size={16} stroke="#fff" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleDecreaseYear}
            className="p-1 rounded-full bg-plt-accent flex items-center justify-center"
          >
            <IconArrowLeft size={16} stroke="#fff" />
          </button>
          <h2 className="text-center text-white bg-plt-accent/20 text-xl rounded-full px-5">
            {currentYear}
          </h2>
          <button
            onClick={handleIncreaseYear}
            className="p-1 rounded-full bg-plt-accent flex items-center justify-center"
          >
            <IconArrowRight size={16} stroke="#fff" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 mt-5">
        {weekDays.map((day) => (
          <div key={day} className="border rounded-lg text-center">
            {day}
          </div>
        ))}
        {emptyDays.map((emptyDay) => (
          <div key={emptyDay} className="rounded-lg bg-plt-accent/5"></div>
        ))}
        {monthDays.map((item) => {
          return <CardDay key={item.getDate()} day={item} />;
        })}
      </div>
    </div>
  );
};
