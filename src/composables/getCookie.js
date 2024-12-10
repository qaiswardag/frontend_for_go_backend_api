export const getCookie = function (name) {
  if (typeof document === 'undefined') {
    console.error('getCookie: document is not defined');
    return null;
  }

  const value = `${document.cookie}`;
  console.log('val:', value);

  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
  return name + ' not found.';
};
