'use client';

import React, { PropsWithChildren } from 'react';

import { TKeys } from '@/shared/constants';

export type TModalContextMapValue = { visible: boolean };
export type TModalMap = Map<TKeys, TModalContextMapValue>;

export type TModalContextState = {
  modals: TModalMap;
  register: (key: TKeys, { visible }: { visible: boolean }) => void;
  open: (key: TKeys) => void;
  close: (key: TKeys) => void;
  remove: (key: TKeys) => void;
  checkVisible: (key: TKeys) => boolean;
};

export const ModalContext = React.createContext<TModalContextState>({
  modals: new Map(),
  register: () => {},
  checkVisible: () => {
    return false;
  },
  open: () => {},
  close: () => {},
  remove: () => {},
});

export const ModalContextProvider = ({ children }: PropsWithChildren) => {
  const [modals, setModals] = React.useState<TModalMap>(new Map([]));

  const register: TModalContextState['register'] = (key, { visible = false }) => {
    setModals((state) => {
      return new Map(
        state.set(key, {
          visible,
        }),
      );
    });
  };

  const checkVisible = (key: TKeys) => {
    return modals.get(key)?.visible ?? false;
  };

  const open = (key: TKeys) => {
    const modal = modals.get(key);

    if (modal) {
      setModals((state) => {
        const nextState = new Map(state.set(key, { ...modal, visible: true }));

        return nextState;
      });
    }
  };

  const close = (key: TKeys) => {
    const modal = modals.get(key);

    if (modal) {
      setModals((state) => new Map(state.set(key, { ...modal, visible: false })));
    }
  };

  const remove = (key: TKeys) => {
    setModals((state) => {
      state.delete(key);
      return new Map(state);
    });
  };

  const value = {
    modals,
    register,
    checkVisible,
    open,
    close,
    remove,
  };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

export const useModalContext = () => React.useContext(ModalContext);

/**
 * @description
 * 모달을 생성하기 위한 훅이에요.
 *
 * NOTE 편의성을 위해 쓰기보다는 가급적 '모달 컴포넌트 생성 시 전역에 등록하기 위한 용도'로 사용해주세요.
 * 등록을 하더라도 중요한 건 현재 모달 컴포넌트가 페이지마다 있어야 활성화돼요.
 * 따라서 컴포넌트와 등록 로직을 1:1로 매핑하여 해당 페이지에 모달이 사용 가능한지 정확히 디버깅하기 위함이에요.
 */
export const useModalRegister = (key: TKeys, options?: { visible: boolean }) => {
  const { register, modals, checkVisible, close, open } = useModalContext();

  React.useEffect(() => {
    if (!modals.has(key)) {
      register(key, { visible: options?.visible ?? false });
    }
  }, []);

  return {
    visible: checkVisible(key),
    close: () => close(key),
    open: () => open(key),
  };
};
