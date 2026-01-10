import { useState, useCallback, useRef } from "react";

export const useSlideUnlock = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const hasResetRef = useRef(false);

  // Solo controla si está desbloqueado o no, sin bloquear scroll
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
