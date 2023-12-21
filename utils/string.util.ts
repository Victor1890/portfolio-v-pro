export const stringToSlug = (str: string) => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export const generateUUID = (): string => {
  const chars = '0123456789abcdef';
  let uuid = '';

  for (let i = 0; i < 32; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    uuid += chars[randomIndex];
  }

  return `${uuid.substr(0, 8)}-${uuid.substr(8, 4)}-${uuid.substr(
    12,
    4
  )}-${uuid.substr(16, 4)}-${uuid.substr(20)}`;
};
