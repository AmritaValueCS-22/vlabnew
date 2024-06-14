const setCookies = (token) => {
  return (document.cookie = `token=${token}; expires=${new Date(
    Date.now() + 86400e3
  ).toUTCString()}; path=/;`);
};

const getValueFromCookie = (token) => {
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.startsWith(token)) {
      return decodeURIComponent(cookie.substring(token.length));
    }
  }
  return null;
};
const deleteCookie = (cookieName) => {
  document.cookie =
    cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
};
export { setCookies, getValueFromCookie, deleteCookie };
