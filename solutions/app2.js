'use strict';

const setCookie = (name = '', value = '') => {
  const now = new Date();
  now.setMinutes(now.getMinutes() + 15);
  const expires = now.toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}


const cookieHandler = {
  getAll() {
    const keyValuePairs = document.cookie.split('; ').map(cookie => cookie.split('='));
    const object = {};
    keyValuePairs.map(item => object[item[0]] = item[1]);
    return object;
  },
  toSessionStorage() {
    const allCookie = cookieHandler.getAll();
    Object.keys(allCookie).map(key => sessionStorage.setItem(key, allCookie[key]));
  },
  flush() {
    const allCookie = cookieHandler.getAll();
    Object.keys(allCookie).map(key =>
      document.cookie = `${key}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`);
  }
};

// setCookie('viewed', '5');
// setCookie('uid', '354774631237');
// setCookie('ssid', 'Bx55OWbHJ0Vt_IGIF');

export { cookieHandler };
