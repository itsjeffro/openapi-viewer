export const slugify = (value: string): string => {
  return value
    .toLowerCase()
    .replaceAll(/[']/g, '')
    .replaceAll(/[\s._]/g, '-');
};

export const ucfirst = (value: string): string => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};
