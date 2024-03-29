export const getUrl = (url: string, params: Record<string, string>) => {
  const queryParams = new URLSearchParams(params);
  const apiUrl = `https://${process.env.NEXT_PUBLIC_API_HOST}/${url}?${queryParams}`;
  return apiUrl;
};
