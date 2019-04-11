import { camelize } from 'helpers/string';

export const arrayToObject = (arr, key) => arr.reduce((a, p) => {
  return {
    ...a,
    [p[key]]: p,
  };
}, {});

export const camelizeKeys = obj => Object.keys(obj).reduce((a, k) => {
  return {
    ...a,
    [camelize(k)]: obj[k],
  };
}, {});
