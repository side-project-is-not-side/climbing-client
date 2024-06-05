export type Days = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

export type ExternalLink = {
  scheme: string;
  link: string;
};

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
  latitude: number;
  longitude: number;
  naverMap: ExternalLink;
  instagram: ExternalLink;
};
