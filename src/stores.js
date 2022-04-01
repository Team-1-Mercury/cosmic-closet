import create from 'zustand';
import { devtools } from 'zustand/middleware';

const detailStore = create(
  // All this does is include middleware to add the store to the Redux chrome extension
  devtools((set) => ({
    counter: 0,
    increaseCounter: () => set((state) => ({ counter: state.counter + 1 })),
    decreaseCounter: () => set((state) => ({ counter: state.counter - 1 })),
    apiResults: [],
    setApiResults: (data) => set(() => ({ apiResults: data })),
    filteredApiResults: [],
    setFilteredApiResults: (data) => set(() => ({ filteredApiResults: data })),
  })),
);

const ratingStore = create(
  // To be able to see multiple stores in Redux DevTools, set the selector in the
  // extension to "Autoselect instances"
  devtools((set) => ({
    dogs: 999,
    increaseDogs: () => set((state) => ({ dogs: state.dogs + 1 })),
    decreaseDogs: () => set((state) => ({ dogs: state.dogs - 1 })),
  })),
);

const questionsStore = create(
  // To be able to see multiple stores in Redux DevTools, set the selector in the
  // extension to "Autoselect instances"
  devtools((set) => ({
    dogs: 999,
    increaseDogs: () => set((state) => ({ dogs: state.dogs + 1 })),
    decreaseDogs: () => set((state) => ({ dogs: state.dogs - 1 })),
  })),
);

export { detailStore, ratingStore, questionsStore };