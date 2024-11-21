import { useRef } from 'react';

const ScrollToNext = ({ children }) => {
  const sectionRefs = useRef([]);

  const handleScrollToNext = (index) => {
    const nextSection = sectionRefs.current[index + 1];
    if (nextSection) {
      const offset = 250;
      const sectionTop =
        nextSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop - offset,
        behavior: 'smooth',
      });
    }
  };

  return children({ sectionRefs, handleScrollToNext });
};

export default ScrollToNext;
