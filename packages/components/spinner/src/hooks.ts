import { useEffect, useState } from 'react';

const useDelay = (delay = 250) => {
  const [open, setOpen] = useState(delay === 0);

  useEffect(() => {
    if (delay === 0) return;
    const openTimer = setTimeout(() => setOpen(true), delay);
    return () => clearTimeout(openTimer);
  }, [delay]);

  return open;
};

export { useDelay };
