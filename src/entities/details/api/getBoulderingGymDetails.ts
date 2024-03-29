export type BoulderingGymDetails = {
  id: number;
  imageUrls: string[];
  name: string;

  upcomingSector: {
    date: Date;
    name: string;
  };

  lastUpdatedSector: {
    date: Date;
    name: string;
  };

  description: string;

  tags: string[];

  location: {
    latitude: number;
    longitude: number;
  };

  roadNameAddress: string;

  instagram: {
    scheme: string;
    link: string;
  };

  naverMap: {
    scheme: string;
    link: string;
  };

  businessHours: {
    weekday: {
      startAt: Date;
      endAt: Date;
    };
    weekend: {
      startAt: Date;
      endAt: Date;
    };
  };
};
export const getBoulderingGymDetails = async (id: string): Promise<BoulderingGymDetails> => {
  const res = await fetch(`https://${process.env.NEXT_PUBLIC_API_HOST}/api/bouldering-gym/${id}`, {
    cache: 'no-cache',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
