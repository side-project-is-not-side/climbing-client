import { StateCreator, create } from 'zustand';
import { combine, devtools } from 'zustand/middleware';

const initialState: { currentVersion: string | undefined; osType: 'iOS' | 'Android' | 'other' } = {
  currentVersion: undefined,
  osType: 'other',
};

const reducer = (set: (param: StateCreator<typeof initialState>) => void) => ({
  updateAppState(currentVersion: string, osType: 'iOS' | 'Android' | 'other') {
    set(() => ({ currentVersion, osType }));
  },
});

export const useAppVersionStore = create(
  devtools(combine(initialState, reducer), {
    name: 'app-version',
  }),
);
