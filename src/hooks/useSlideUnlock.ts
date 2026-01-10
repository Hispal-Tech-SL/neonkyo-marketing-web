import { useState, useEffect, useCallback } from "react";

export const useSlideUnlock = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);

  // Bloquear scroll cuando no está desbloqueado
  useEffect(() => {
    if (!isUnlocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isUnlocked]);

  // Detectar cuando el slider se desliza completamente
  const handleSliderMove = useCallback((progress: number) => {
    setSliderPosition(progress);

    // Desbloquear cuando el slider alcanza el 100%
    if (progress >= 100) {
      setIsUnlocked(true);
    }
  }, []);

  // Resetear slider si se intenta hacer scroll (para reintentar si es necesario)
  const resetSlider = useCallback(() => {
    setSliderPosition(0);
  }, []);

  return {
    isUnlocked,
    sliderPosition,
    handleSliderMove,
    resetSlider,
  };
};
