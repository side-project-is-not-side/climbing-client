export type RecommendationGymList = {
  imageUrl: string;
  name: string;
  upcomingSector: {
    date: Date;
    name: string;
  };
  lastUpdatedSector: {
    date: Date;
    name: string;
  };
};

export const getRecommendationGym = async (): Promise<RecommendationGymList[]> => {
  const res = await fetch(`https://${process.env.NEXT_PUBLIC_API_HOST}/api/bouldering-gym/recommendation`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
