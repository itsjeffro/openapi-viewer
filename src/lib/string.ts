export const slugify = (value: string) => {
  return value
    .toLowerCase()
    .replaceAll(/[']/g, '')
    .replaceAll(/[\s._]/g, '-');
};
