export type Bounds = {
  minLatitude: string;
  maxLatitude: string;
  minLongitude: string;
  maxLongitude: string;
};

export type TSectorUpdateInfo = { date: string; name: string };

export type AroundGym = {
  id: number;
  latitude: number;
  longitude: number;
};

export type GetAroundBoulderingGymResponse = AroundGym[];

export type Location = {
  latitude: number;
  longitude: number;
};
export type Link = {
  scheme: string;
  link: string;
};
export type DurationTime = {
  startAt: string;
  endAt: string;
};

export type BusinessHours = {
  weekday: DurationTime;
  weekend: DurationTime;
};

export type GetSelectedBoulderingGymResponse = {
  id: number;
  name: string;
  roadNameAddress: string;
  upcomingSector: TSectorUpdateInfo;
  lastUpdatedSector: TSectorUpdateInfo;
  tags: string[];
};

export type GetBoulderingGymDetailResponse = {
  id: number;
  imageUrls: string[];
  name: string;
  upcomingSector: TSectorUpdateInfo;
  lastUpdatedSector: TSectorUpdateInfo;
  description: string;
  tags: string[];
  location: Location;
  roadNameAddress: string;
  instagram: Link;
  naver: Link;
  businessHours: BusinessHours;
};
