import { useEffect, useState } from 'react';

const useStorage = <T,>(key: string) => {
  const [storedValue, setStoredValue] = useState<T>();

  const setValue = (value: T) => {
    window.electron.store.set(key, value);
    setStoredValue(value);
  };

  useEffect(() => {
    const fetchStorage = () => {
      window.electron.store.get(key, (data: T) => {
        setStoredValue(data);
      });
    };
    fetchStorage();
  }, [key]);
  return [storedValue, setValue] as const;
};

export default useStorage;
