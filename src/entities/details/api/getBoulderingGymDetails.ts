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

  instagram: SocialLinkInfo;

  naverMap: SocialLinkInfo;

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

export type SocialLinkInfo = {
  scheme: string;
  link: string;
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
