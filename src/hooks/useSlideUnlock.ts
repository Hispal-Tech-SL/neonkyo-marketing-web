import { useState, useCallback, useEffect } from "react";

export const useSlideUnlock = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyOverscrollBehavior = body.style.overscrollBehavior;

    const preventScrollKeys = (event: KeyboardEvent) => {
      const blockedKeys = [
        "ArrowUp",
        "ArrowDown",
        "PageUp",
        "PageDown",
        "Home",
        "End",
        " ",
      ];

      if (blockedKeys.includes(event.key)) {
        event.preventDefault();
      }
    };

    if (!isUnlocked) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
      body.style.overscrollBehavior = "none";
      window.addEventListener("keydown", preventScrollKeys, { passive: false });
    }

    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
      body.style.overscrollBehavior = previousBodyOverscrollBehavior;
      window.removeEventListener("keydown", preventScrollKeys);
    };
  }, [isUnlocked]);

  const handleSliderMove = useCallback((progress: number) => {
    if (progress >= 100) {
      setIsUnlocked(true);
    }
  }, []);

  return {
    isUnlocked,
    handleSliderMove,
  };
};
