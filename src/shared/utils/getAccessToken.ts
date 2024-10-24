export function getAccessToken() {
  const cookies = document.cookie.split(';');
  const accessToken = cookies.find((cookie) => cookie.trim().startsWith('accessToken='))?.split('=')[1];
  return accessToken;
}
