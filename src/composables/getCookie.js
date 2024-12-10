export const getCookie = function (name) {
  if (typeof document === 'undefined') {
    return null;
  }

  const value = `${document.cookie}`;

  const parts = value.split(';').map((cookie) => cookie.trim());
  for (let part of parts) {
    if (part.startsWith(`${name}=`)) {
      return part.substring(name.length + 1);
    }
  }
  return `${name} not found.`;
};
