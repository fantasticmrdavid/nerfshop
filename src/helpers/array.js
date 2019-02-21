export const arrayToObject = (arr, key) => arr.reduce((a, p) => {
  return {
    ...a,
    [p[key]]: p,
  };
}, {});
