import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CountState = {
  count: number;
  increment: () => void;
};

export const useCountStore = create(
  persist<CountState>(
    (set) => ({
      count: 0,
      increment: () => set((s) => ({ count: ++s.count })),
    }),
    { name: "count" }
  )
);
