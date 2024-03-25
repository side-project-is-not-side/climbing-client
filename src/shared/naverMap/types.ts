export type NaverMap = naver.maps.Map;
export type NaverMapOptions = naver.maps.MapOptions;

type Lat = number;
type Lng = number;
export type Coordinates = [Lat, Lng];

export type TMarker = naver.maps.Marker | null;

export type ImageIcon = {
  url: string;
  size: naver.maps.Size;
  origin: naver.maps.Point;
  scaledSize?: naver.maps.Size;
};
