import { useState } from 'react';

export const useBooleanState = (initialState: boolean): [boolean, () => void, () => void, () => void] => {
  const [state, setState] = useState(initialState);

  const setTrue = () => setState(true);

  const setFalse = () => setState(false);

  const toggleState = () => setState((prev) => !prev);

  return [state, setTrue, setFalse, toggleState];
};
