export type UserInfoMain = {
  characterLevel: number;
  characterName: string;
  nickname: string;
  challengingCount: number;
  badgeCount: number;
};

export type Status = 'SUCCESS' | 'ONGOING';
export type ActivityType = 'PICTURE' | 'VIDEO' | 'LOCATION';

export type Challenge = {
  id: number;
  title: string;
  summary: string;
  activityCount: number;
  successCount: number;
  activityType: ActivityType;
  imageUrl: string;
};
