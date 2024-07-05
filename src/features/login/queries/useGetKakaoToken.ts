import useSWR from 'swr';

export const useGetKakaoToken = ({
  code,
  setCode,
}: {
  code: string | null;
  setCode: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  return useSWR(code ? `/v1/oauth2/kakao?code=${code}` : null, {
    onSuccess: (data) => {
      console.log(data);
      setCode(null);
    },
  });
};
