import { useCallback, Dispatch, SetStateAction, useState } from 'react';

type ReturnTypes<T = any> = [T, (e: any) => void, Dispatch<SetStateAction<T>>];

const useInput = <T>(initialData: T): ReturnTypes => {
  const [value, setValue] = useState(initialData);
  const handler = useCallback((e: any) => {
    setValue(e.target.value);
  }, []);

  return [value, handler, setValue];
};

export default useInput;

// any 바꾸는 법
// ChangeEvent<HTMLInputElement>
// e.target.value -> e.target.value as unknown as T
