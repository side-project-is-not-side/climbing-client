import { ActivityType } from '../apis';

export const getActivityLabel = (activityType: ActivityType) => {
  if (activityType === 'LOCATION') return '위치 챌린지';

  if (activityType === 'PICTURE') return '사진 챌린지';

  if (activityType === 'VIDEO') return '영상 챌린지';

  return '';
};
