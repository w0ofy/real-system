import { useEffect, useState } from 'react';

const useDelay = (delay = 250) => {
  const [visible, setVisible] = useState(delay === 0);

  useEffect(() => {
    if (delay === 0) return;
    const visibleTimer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(visibleTimer);
  }, [delay]);

  return visible;
};

export { useDelay };
