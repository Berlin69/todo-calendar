import { create } from 'zustand';

interface CalendarState {
  selectedMonth: number;
  selectedYear: number;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  updateMonth: (value: number) => void;
  decreaseYear: () => void;
  increaseYear: () => void;
}

export const useCalendarStore = create<CalendarState>((set) => ({
  selectedMonth: new Date().getMonth(),
  selectedYear: new Date().getFullYear(),
  decreaseMonth: () =>
    set((state) => ({ selectedMonth: state.selectedMonth - 1 })),
  increaseMonth: () =>
    set((state) => ({ selectedMonth: state.selectedMonth + 1 })),
  updateMonth: (value) => set({ selectedMonth: value }),
  decreaseYear: () =>
    set((state) => ({ selectedYear: state.selectedYear - 1 })),
  increaseYear: () =>
    set((state) => ({ selectedYear: state.selectedYear + 1 })),
}));
