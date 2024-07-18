import { useSearchParams } from 'next/navigation';



import { Status } from '../apis';
import { useGetChallengesByStatus } from './useGetChallengesByStatus';


export const useGetChallengesByQuery = () => {
  const params = useSearchParams();
  const status = (params.get('status') as Status) || 'NOT_STARTED'; ;

  return useGetChallengesByStatus(status);
};