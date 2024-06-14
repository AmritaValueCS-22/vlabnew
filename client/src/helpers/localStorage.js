const setValue = (key, value) => {
  return localStorage.setItem(key, value);
};

const getValue = (key) => {
  return localStorage.getItem(key);
};
const deleteValue = (key) => {
  return localStorage.removeItem(key);
};
const deleteAll = () => {
  return localStorage.clear();
};

export { setValue, getValue, deleteValue, deleteAll };
