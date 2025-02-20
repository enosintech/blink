import { useEffect, useState } from 'react';

export const useViewportHeight = () => {

  const [viewportHeight, setViewportHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const calculateViewportHeight = () => {

      const vh = window.innerHeight;

      setViewportHeight(vh);
    };

    calculateViewportHeight();

  }, []);

  return viewportHeight;
  
};