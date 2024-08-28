import React from 'react';

const ShowInfoButton = () => {
  // TODO: onClick 이벤트 구현 (NAME: 유선주)
  return (
    <button type="button" className="w-5 h-5">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="10" fill="#DAD3CB" />
        <path
          d="M14 7.18989C14 7.59597 13.9323 7.96465 13.797 8.29593C13.6616 8.62721 13.4794 8.93177 13.2503 9.20962C13.0317 9.48746 12.7766 9.74928 12.4851 9.99507C12.1935 10.2409 11.8968 10.476 11.5949 10.7004C11.4074 10.8393 11.2565 10.9729 11.1419 11.1011C11.0274 11.2187 10.9441 11.3469 10.8921 11.4858C10.84 11.6141 10.8036 11.769 10.7827 11.9507C10.7723 12.1217 10.7671 12.3247 10.7671 12.5598C10.7671 12.656 10.7463 12.7575 10.7046 12.8644C10.6734 12.9712 10.6109 13.0727 10.5172 13.1689C10.4339 13.2651 10.3142 13.3453 10.158 13.4094C10.0122 13.4628 9.82484 13.4895 9.59577 13.4895C9.21053 13.4895 8.90338 13.4147 8.67432 13.2651C8.44526 13.1048 8.33073 12.8376 8.33073 12.4636C8.33073 12.0682 8.36717 11.7209 8.44006 11.4217C8.51294 11.1118 8.61706 10.8393 8.75241 10.6042C8.89818 10.3584 9.08039 10.1393 9.29904 9.94698C9.51769 9.75462 9.77278 9.56761 10.0643 9.38594C10.2517 9.25771 10.4287 9.11878 10.5953 8.96917C10.7619 8.81956 10.9129 8.65927 11.0482 8.48829C11.1836 8.3173 11.2877 8.13029 11.3606 7.92725C11.4439 7.72421 11.4855 7.49979 11.4855 7.25401C11.4855 7.04028 11.4595 6.84792 11.4074 6.67694C11.3554 6.49527 11.2669 6.34032 11.1419 6.21208C11.017 6.08385 10.8452 5.98767 10.6266 5.92355C10.4079 5.84875 10.132 5.81134 9.79881 5.81134C9.53851 5.81134 9.31986 5.83806 9.14286 5.89149C8.97627 5.94492 8.83571 6.00904 8.72118 6.08385C8.60665 6.15865 8.51294 6.2388 8.44006 6.32429C8.36717 6.3991 8.29949 6.46321 8.23702 6.51665C8.10167 6.6342 7.9507 6.72503 7.78411 6.78915C7.62793 6.85327 7.46654 6.89601 7.29995 6.91739C7.14378 6.92807 6.9876 6.91739 6.83142 6.88533C6.68565 6.85327 6.5555 6.79449 6.44097 6.709C6.18068 6.51665 6.03491 6.30292 6.00367 6.06782C5.98285 5.83272 6.05053 5.61899 6.20671 5.42663C6.34206 5.25565 6.51906 5.08467 6.73771 4.91369C6.95636 4.7427 7.21666 4.58775 7.5186 4.44883C7.82055 4.30991 8.16414 4.20304 8.54938 4.12824C8.93462 4.04275 9.37192 4 9.86128 4C10.5797 4 11.1992 4.09083 11.7198 4.2725C12.2404 4.44349 12.6673 4.67859 13.0005 4.9778C13.3441 5.26634 13.5939 5.60296 13.7501 5.98767C13.9167 6.37238 14 6.77312 14 7.18989ZM8.03399 15.6375C8.03399 16.0863 8.17976 16.4229 8.47129 16.6473C8.77324 16.8825 9.14286 17 9.58016 17C10.0175 17 10.3871 16.8825 10.689 16.6473C10.991 16.4229 11.1419 16.0863 11.1419 15.6375C11.1419 15.1887 10.991 14.8467 10.689 14.6116C10.3871 14.3765 10.0175 14.2589 9.58016 14.2589C9.14286 14.2589 8.77324 14.3765 8.47129 14.6116C8.17976 14.8467 8.03399 15.1887 8.03399 15.6375Z"
          fill="#B7B0A8"
        />
      </svg>
    </button>
  );
};

export default ShowInfoButton;