const ACCESS_TOKEN = 'ACCESS_TOKEN';
// กันการพิมพลาด

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);
// get the token from localStorage

export const setAccessToken = accessToken =>
  localStorage.setItem(ACCESS_TOKEN, accessToken);
// set item key access token

export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);
// remove
