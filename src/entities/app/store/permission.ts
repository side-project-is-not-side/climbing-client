import { PermissionStatus } from '../constants';
import { StateCreator, create } from 'zustand';
import { combine, devtools } from 'zustand/middleware';

const initialState: { status: PermissionStatus } = {
  status: 'denied',
};

const reducer = (set: (param: StateCreator<typeof initialState>) => void) => ({
  updateNotificationPermissionStatus(status: PermissionStatus) {
    set(() => ({ status }));
  },
});

export const useNotificationPermissionStore = create(
  devtools(combine(initialState, reducer), {
    name: 'notification-permission',
  }),
);
