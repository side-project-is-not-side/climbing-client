export type UserInfoMain = {
  characterLevel: 1 | 2 | 3 | 4;
  characterName: string;
  nickname: string;
  challengingCount: number;
  badgeCount: number;
  email: string;
  provider: 'KAKAO';
};

export type Status = 'SUCCESS' | 'ONGOING' | 'NOT_STARTED';
export type ActivityType = 'PICTURE' | 'VIDEO' | 'LOCATION';

export type Challenge = {
  id: number;
  title: string;
  summary: string;
  activityCount: number;
  successCount: number;
  activityType: ActivityType;
  completedAt: string | null;
  imageUrl: {
    black: string;
    color: string;
  };
};
