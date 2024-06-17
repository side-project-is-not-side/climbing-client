import { Challenge, Status, UserInfoMain } from './types';

export const getUserInfo = async (): Promise<UserInfoMain> => {
  const res = await fetch(`https://${process.env.NEXT_PUBLIC_API_HOST}/api/v1/user-info/main`, {
    cache: 'no-cache',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export const getChallenges = async (status: Status): Promise<Challenge[]> => {
  const res = await fetch(`https://${process.env.NEXT_PUBLIC_API_HOST}/api/v1/challenges?status=${status}`, {
    cache: 'no-cache',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
