export const typeToCategory = (type) => {
  const mappings = {
    accessory: 'accessories',
    blaster: 'blasters',
  };

  return mappings[type];
};
