import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [scrollData, setScrollData] = useState({
    progress: 0,
    scrollY: 0,
    activeSection: 'hero',
  });

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(Math.max(scrollY / docHeight, 0), 1) : 0;

      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'contact'];
      let activeSection = 'hero';

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            activeSection = id;
          }
        }
      }

      setScrollData({ progress, scrollY, activeSection });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    updateScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return scrollData;
}
