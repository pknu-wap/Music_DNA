import { useState, useEffect } from 'react';

const useIsMobie = (breakPoint = 698) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 698);

  useEffect(() => {
    const detectResize = () => {
      setIsMobile(window.innerWidth < 698);
    };
    window.addEventListener('resize', detectResize);
    return () => window.removeEventListener('resize', detectResize);
  }, [breakPoint]);

  return isMobile;
};

export default useIsMobie;
