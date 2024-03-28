export const getUrl = (url: string, params: Record<string, string>) => {
  const queryParams = new URLSearchParams(params);
  const endpoint = `${url}?${queryParams}`;
  return endpoint;
};
