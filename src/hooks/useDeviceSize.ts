import { useState, useEffect } from 'react';

const useDeviceSize = () => {
  const [isPcDevice, setIsPcDevice] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  // 최초 로딩 상태일 때 Device 값 계산
  useEffect(() => {
    if (window.innerWidth > 800) {
      setIsPcDevice(true);
    }
  }, []);

  // 브라우저 사이즈 줄어들 때 마다 Device값 계산
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 800) {
        setIsPcDevice(true);
      } else {
        setIsPcDevice(false);
      }
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return {
    isPcDevice,
    isMobileDevice,
    setIsPcDevice,
    setIsMobileDevice
  };
};

export default useDeviceSize;
