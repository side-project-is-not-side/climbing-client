import { ImageIcon } from '../types';

const MARKER_HEIGHT = 64;
const MARKER_WIDTH = 54;
const NUMBER_OF_MARKER = 13;
const SCALE = 2 / 3;

const SCALED_MARKER_WIDTH = MARKER_WIDTH * SCALE;
const SCALED_MARKER_HEIGHT = MARKER_HEIGHT * SCALE;

export const generateMarkerIcon = (markerIndex: number, isSelected: boolean): ImageIcon => {
  return {
    /* TODO: 추후 마커 디자인 나오면 해당 마커 파일 경로로 변경 */
    url: isSelected ? 'images/markers-selected.png' : 'images/markers.png',
    size: new naver.maps.Size(SCALED_MARKER_WIDTH, SCALED_MARKER_HEIGHT),
    origin: new naver.maps.Point(SCALED_MARKER_WIDTH * markerIndex, 0),
    scaledSize: new naver.maps.Size(SCALED_MARKER_WIDTH * NUMBER_OF_MARKER, SCALED_MARKER_HEIGHT),
  };
};
