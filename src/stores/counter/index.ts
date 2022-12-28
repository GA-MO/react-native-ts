import create from 'zustand';

interface State {
  count: number;
}

interface Actions {
  increase: () => void;
}

interface CounterStore extends State, Actions {}

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increase: () => {
    set((s) => ({
      count: s.count + 1,
    }));
  },
}));
