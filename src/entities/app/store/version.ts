import { StateCreator, create } from 'zustand';
import { combine, devtools } from 'zustand/middleware';

const initialState: { currentVersion: string | undefined; userAgent: 'iOS' | 'Android' | undefined } = {
  currentVersion: undefined,
  userAgent: undefined,
};

const reducer = (set: (param: StateCreator<typeof initialState>) => void) => ({
  updateAppState(currentVersion: string, userAgent: 'iOS' | 'Android') {
    set(() => ({ currentVersion, userAgent }));
  },
});

export const useAppVersionStore = create(
  devtools(combine(initialState, reducer), {
    name: 'app-version',
  }),
);
