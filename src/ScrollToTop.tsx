// ScrollToTop.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};
