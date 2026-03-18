import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + offset;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveId(sectionIds[i]);
          return;
        }
      }
    };

    window.addEventListener("scroll", handler, { passive: true });
    handler(); // initial set
    return () => window.removeEventListener("scroll", handler);
  }, [sectionIds, offset]);

  return activeId;
}
