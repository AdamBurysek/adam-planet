'use client';

export const getLocalStorage = (
  key: string,
  defaultValue: boolean | null,
): boolean | null => {
  const stickyValue = localStorage.getItem(key);

  return stickyValue !== null && stickyValue !== 'undefined'
    ? (JSON.parse(stickyValue) as boolean | null)
    : defaultValue;
};

export const setLocalStorage = (key: string, value: boolean | null) => {
  localStorage.setItem(key, JSON.stringify(value));
};
