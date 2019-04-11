export const camelize = (str) => {
  const newStr = str.replace(/[-_\s]+(.)?/g, (match, ch) =>
    (ch ? ch.toUpperCase() : ''),
  );
  return newStr.substr(0, 1).toLowerCase() + newStr.substr(1);
};
