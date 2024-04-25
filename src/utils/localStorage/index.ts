export const setDataToLS = (key: string, value: number | string) =>
  localStorage.setItem(key, JSON.stringify(value));

export const getDataFromLS = (key: string) => localStorage.getItem(key);

export const getValuesFromLS = <T extends object>(obj: T, ...args: string[]) =>
  args.reduce((acc, el) => {
    if (getDataFromLS(el)) {
      return { ...acc, [el]: JSON.parse(getDataFromLS(el) || "") };
    }
    return { ...acc, [el]: "" };
  }, obj);

export const removeDataFromLS = (...args: string[]) =>
  args.forEach((i) => localStorage.removeItem(i));
