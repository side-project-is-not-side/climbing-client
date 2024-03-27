import Image from 'next/image';

type Props = {
  onClick: () => void;
};

const CurrentLocationButton = ({ onClick }: Props) => {
  return (
    <button type="button" onClick={onClick} className="absolute top-5 right-5">
      <Image src="/images/current-location-button.png" width={46} height={46} alt="현재 위치로 이동" />
    </button>
  );
};

export default CurrentLocationButton;
