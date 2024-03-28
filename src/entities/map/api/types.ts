export type Bounds = {
  minLatitude: string;
  maxLatitude: string;
  minLongitude: string;
  maxLongitude: string;
};

export type AroundGym = {
  id: number;
  name: string;
  imageUrl: string;
  roadNameAddress: string;
  lotNumberAddress: string;
  latitude: number;
  longitude: number;
  tags: string[];
};
export type GetAroundBoulderingGymResponse = AroundGym[];
