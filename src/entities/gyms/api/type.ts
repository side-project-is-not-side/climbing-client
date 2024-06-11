export type Days = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

export type ExternalLink = {
  scheme: string;
  link: string;
};

export type Location = { latitude: number; longitude: number };
export type BusinessHours = Record<Days, string>;

export type GetGymDetailResponse = {
  id: number;
  name: string;
  thumbnailImageUrl: string;
  tags: string[];
  description: string;
  businessHours: BusinessHours;
  roadNameAddress: string;
  distance: number;
  location: Location;
  naverMap: ExternalLink;
  instagram: ExternalLink;
};
