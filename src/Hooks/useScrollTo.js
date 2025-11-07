import { useCallback } from 'react';

export const useScrollTo = (offset = 70) => {
  const scrollTo = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [offset]);

  return scrollTo;
};