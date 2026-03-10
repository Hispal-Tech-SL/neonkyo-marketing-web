import { useState, useRef, useEffect } from "react";
import { useSlideUnlock } from "@/hooks/useSlideUnlock";
import { useI18n } from "@/i18n/i18n";

const LanguageSelector: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { lang, setLang } = useI18n();
  return (
    <div
      className={`flex items-center ${compact ? "gap-1 px-1.5 py-1" : "gap-2 px-2 py-1"} bg-black/60 rounded border border-primary/40 shadow-[0_6px_18px_rgba(59,255,0,0.07)]`}
    >
      <button
        onClick={() => setLang("es")}
        className={`${compact ? "px-1.5 py-0.5 text-xs" : "px-2 py-1 text-sm"} ${lang === "es" ? "bg-primary text-black font-bold" : "text-white/80"}`}
      >
        ES
      </button>
      <button
        onClick={() => setLang("en")}
        className={`${compact ? "px-1.5 py-0.5 text-xs" : "px-2 py-1 text-sm"} ${lang === "en" ? "bg-primary text-black font-bold" : "text-white/80"}`}
      >
        EN
      </button>
    </div>
  );
};

const TopInfoMobile: React.FC = () => {
  const { t } = useI18n();
  return (
    <p className="font-mono text-[6px] text-white/50 leading-tight tracking-widest">
      &gt;&gt;
      <br />
      {t("hero.rev")}
      <br />
      {t("hero.services_label")}
      <br />
      {t("hero.version")}
      <br />
      {t("hero.ai")}
    </p>
  );
};

const HeroSection = () => {
  const { isUnlocked, handleSliderMove } = useSlideUnlock();
  const [dragProgress, setDragProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isFullyUnlocked, setIsFullyUnlocked] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const mobileSliderRef = useRef<HTMLDivElement>(null);
  const { t } = useI18n();

  // Estilos para la animación de parpadeo
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes blink-slider {
        0% {
          opacity: 1;
        }
        25% {
          opacity: 0.8;
        }
        50% {
          opacity: 0.2;
        }
        75% {
          opacity: 0.8;
        }
        100% {
          opacity: 1;
        }
      }
      
      .slider-blinking {
        animation: blink-slider 4s infinite ease-in-out;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Capturar ancho del contenedor
  useEffect(() => {
    const slider = sliderRef.current || mobileSliderRef.current;
    if (slider) {
      setContainerWidth(slider.offsetWidth);
    }

    const handleResize = () => {
      const slider = sliderRef.current || mobileSliderRef.current;
      if (slider) {
        setContainerWidth(slider.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cuando se desbloquea completamente, hacer scroll después de 0.75 segundos
  useEffect(() => {
    if (isUnlocked && isFullyUnlocked) {
      const timer = setTimeout(() => {
        const nextSection = document.querySelector("#about");
        if (nextSection) {
          const targetPosition =
            nextSection.getBoundingClientRect().top + window.scrollY;
          const startPosition = window.scrollY;
          const distance = targetPosition - startPosition;
          const duration = 2000; // 2 segundos para scroll más rápido
          let startTime: number | null = null;

          const ease = (t: number) =>
            t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

          const scroll = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease_progress = ease(progress);
            window.scrollTo(0, startPosition + distance * ease_progress);

            if (progress < 1) {
              requestAnimationFrame(scroll);
            }
          };

          requestAnimationFrame(scroll);
        }
      }, 750);

      return () => clearTimeout(timer);
    }
  }, [isUnlocked, isFullyUnlocked]);

  const handleMouseDown = () => {
    if (!isFullyUnlocked) {
      setIsDragging(true);
    }
  };

  const handleTouchStart = () => {
    if (!isFullyUnlocked) {
      setIsDragging(true);
    }
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const slider = sliderRef.current || mobileSliderRef.current;
      if (!slider) return;

      const rect = slider.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(100, ((e.clientX - rect.left) / rect.width) * 100),
      );
      setDragProgress(progress);

      // Desbloquear cuando alcanza el 100% del recorrido
      if (progress >= 100) {
        handleSliderMove(100);
        setIsFullyUnlocked(true);
        setIsDragging(false);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      const slider = sliderRef.current || mobileSliderRef.current;
      if (!slider) return;

      const touch = e.touches[0];
      const rect = slider.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(100, ((touch.clientX - rect.left) / rect.width) * 100),
      );
      setDragProgress(progress);

      // Desbloquear cuando alcanza el 100% del recorrido
      if (progress >= 100) {
        handleSliderMove(100);
        setIsFullyUnlocked(true);
        setIsDragging(false);
      }
    };

    const handleMouseUp = () => {
      if (dragProgress < 100) {
        setDragProgress(0);
      }
      setIsDragging(false);
    };

    const handleTouchEnd = () => {
      if (dragProgress < 100) {
        setDragProgress(0);
      }
      setIsDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, dragProgress, handleSliderMove]);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-black"
      style={{ minHeight: "100svh", height: "100dvh", marginTop: "0" }}
    >
      {/* Background with code pattern */}
      <div className="absolute inset-0 opacity-5 text-[8px] leading-tight overflow-hidden pointer-events-none">
        <pre className="font-mono text-primary/40 whitespace-pre">
          {`IMPORTAR TIEMPO
# BASE_DE_DATOS_SIMULADA
BASE_DE_DATOS = {
 "INFO_CONFIDENCIAL": "DATOS ULTRA SECRETOS",
 "OTROS_DATOS": "INFORMACIÓN MENOS RELEVANTE"
}
DEF ACCEDER_BASE_DATOS():
 PRINT("ACCESANDO LA BASE DE DATOS...")
 TIME.SLEEP(2)
 PRINT("ESTABLECIENDO CONEXIÓN SEGURA...")
 TIME.SLEEP(2)
 PRINT("EVADIENDO CORTAFUEGOS...")
 TIME.SLEEP(3)`}
        </pre>
      </div>

      {/* Top left corner icon */}
      <div className="absolute top-2 left-4 md:top-8 md:left-8 text-primary text-5xl md:text-6xl font-bold z-50 leading-none relative">
        京
        <div className="hidden md:block absolute left-0 top-full mt-6">
          <LanguageSelector />
        </div>
      </div>

      {/* Mobile language selector kept separate to avoid overlaying hero content */}
      <div className="md:hidden absolute top-3 right-4 z-50 scale-90 origin-top-right">
        <LanguageSelector compact />
      </div>

      {/* MOBILE VERSION */}
      <div className="md:hidden relative z-10 w-full h-full">
        {/* Hero image - centered, anchored to bottom, very large */}
        <div className="absolute inset-0 flex items-start justify-center pointer-events-none overflow-hidden z-0 pt-8 -translate-y-16">
          <img
            src="/assets/images/hero-image.png"
            alt="Neonkyo Estudio - Ciborg"
            className="w-full h-full object-cover object-top z-10 scale-[1.14]"
          />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 w-full h-full px-4">
          {/* Top section */}
          <div className="absolute top-14 right-4 text-right">
            <div className="scale-[0.82] origin-top-right">
              <TopInfoMobile />
            </div>
          </div>

          {/* Center area - Logo positioned */}
          <div className="absolute top-12 right-2 z-40 pointer-events-none">
            <div className="relative">
              <div className="px-2 py-1">
                <h1
                  className="text-[64px] text-primary leading-none tracking-tight italic drop-shadow-lg"
                  style={{
                    fontFamily: "Seriguela",
                    fontWeight: "400",
                    textShadow: "0 0 2px rgba(59, 255, 0, 0.5)",
                    WebkitTextStroke: "0.5px currentColor",
                  }}
                >
                  neonkyo
                </h1>
                <p className="font-japanese text-[22px] text-primary leading-none">
                  ネオン京
                </p>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="absolute inset-x-4 bottom-24 space-y-1.5">
            {/* Description text */}
            <div className="text-left">
              <p className="font-mono text-[6px] text-white/40 leading-relaxed tracking-widest">
                {t("hero.subtitle")}
                <br />
                {t("hero.slide_prompt")}
              </p>
            </div>

            {/* Decorative text */}
            <div className="text-left">
              <p className="font-mono text-[6px] text-white/30 leading-relaxed tracking-widest">
                &lt;&lt;
              </p>
            </div>

            {/* Hero titles */}
            <div className="mb-1">
              <h2 className="font-japanese text-[32px] text-white leading-none font-bold drop-shadow-lg">
                広告の未来
              </h2>
              <h2 className="font-display text-[40px] text-white italic leading-[0.9] font-bold tracking-tight drop-shadow-lg mt-0.5 whitespace-pre-line">
                {t("hero.future")}
              </h2>
            </div>

            {/* CTA Button - Slider */}
            <div className="mt-1.5 w-full">
              <div
                ref={mobileSliderRef}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                className={`relative w-full h-11 overflow-hidden border-2 border-accent/60 flex items-stretch cursor-grab active:cursor-grabbing transition-all duration-300 ${
                  !isFullyUnlocked ? "slider-blinking" : ""
                }`}
                style={{
                  borderColor:
                    dragProgress > 0
                      ? "rgb(239, 68, 68)"
                      : "rgba(239, 68, 68, 0.6)",
                }}
              >
                {/* Progress background */}
                <div
                  className="absolute left-0 top-0 h-full bg-accent/20 z-0"
                  style={{
                    width: `${dragProgress}%`,
                    transition: isDragging ? "none" : "all 75ms",
                  }}
                />

                {/* Slider thumb - Left arrow section that moves */}
                <div
                  className="absolute h-full bg-accent flex items-center justify-center z-10"
                  style={{
                    width: "44px",
                    left: "0",
                    transform: `translateX(${
                      (dragProgress / 100) *
                      ((mobileSliderRef.current?.offsetWidth || 0) - 44)
                    }px)`,
                    transition: isDragging ? "none" : "all 75ms",
                  }}
                >
                  <span className="text-white text-lg font-bold leading-none select-none pointer-events-none">
                    ›
                  </span>
                </div>

                {/* Text section */}
                <div className="flex-1 flex items-center justify-center z-0 pointer-events-none">
                  <span className="font-mono text-white/60 uppercase tracking-[0.2em] text-[8px] select-none">
                    {isFullyUnlocked ? t("hero.unlock") : t("hero.access")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP VERSION */}
      <div className="hidden md:flex relative z-10 w-full h-full">
        {/* Left side - Hero image (60%) - larger and shifted right */}
        <div className="w-3/5 h-full relative flex items-center justify-end overflow-hidden">
          <img
            src="/assets/images/hero-image.png"
            alt="Neonkyo Estudio - Ciborg"
            className="hidden md:block h-full w-auto object-contain scale-125 -mr-12"
          />
        </div>

        {/* Right side - Content (40%) */}
        <div className="w-2/5 h-full flex flex-col justify-start items-end pt-8 pr-16 space-y-4">
          {/* Top info text */}
          <div className="text-right">
            <p className="font-mono text-[9px] text-white/40 leading-tight tracking-widest">
              &gt;&gt;
              <br />
              {t("hero.rev")}
              <br />
              {t("hero.services_label")}
              <br />
              {t("hero.version")}
              <br />
              {t("hero.ai")}
            </p>
          </div>

          {/* Logo with brackets */}
          <div className="relative mt-12">
            {/* Corner brackets */}
            <span className="absolute -top-6 -left-6 text-primary text-5xl leading-none">
              ┌
            </span>
            <span className="absolute -top-6 -right-6 text-primary text-5xl leading-none">
              ┐
            </span>
            <span className="absolute -bottom-6 -left-6 text-primary text-5xl leading-none">
              └
            </span>
            <span className="absolute -bottom-6 -right-6 text-primary text-5xl leading-none">
              ┘
            </span>

            <div className="px-8 py-6">
              <h1
                className="text-[160px] text-primary leading-none tracking-tight italic drop-shadow-lg"
                style={{
                  fontFamily: "Seriguela",
                  fontWeight: "400",
                  textShadow: "0 0 2px rgba(59, 255, 0, 0.5)",
                  WebkitTextStroke: "0.5px currentColor",
                }}
              >
                neonkyo
              </h1>
              <div className="flex items-center justify-end gap-1 mt-1 whitespace-nowrap">
                <p className="font-japanese text-3xl text-primary leading-none">
                  ネオン京
                </p>
                <p
                  className="font-display text-3xl text-primary italic leading-none"
                  style={{ fontFamily: "Seriguela", fontWeight: "400" }}
                >
                  estudio
                </p>
              </div>
            </div>
          </div>

          {/* Description text */}
          <div className="text-right mt-8">
            <p className="font-mono text-[9px] text-white/30 leading-tight tracking-widest">
              {t("hero.subtitle")}
              <br />
              {t("hero.slide_prompt")}
            </p>
          </div>

          {/* Decorative text */}
          <div className="text-right">
            <p className="font-mono text-[9px] text-white/20 leading-tight">
              &lt;&lt;
            </p>
          </div>

          {/* Hero title */}
          <div className="text-right space-y-3 mt-8">
            <h2 className="font-japanese text-6xl text-white leading-none font-bold">
              広告の未来
            </h2>
            <h2 className="font-display text-7xl text-white italic leading-[0.9] font-bold tracking-tight whitespace-pre-line">
              {t("hero.future")}
            </h2>
          </div>

          {/* CTA Button - Slider */}
          <div className="w-full mt-8">
            <div
              ref={sliderRef}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              className={`relative w-full h-16 overflow-hidden border-2 border-accent/60 flex items-stretch cursor-grab active:cursor-grabbing transition-all duration-300 ${
                !isFullyUnlocked ? "slider-blinking" : ""
              }`}
              style={{
                borderColor:
                  dragProgress > 0
                    ? "rgb(239, 68, 68)"
                    : "rgba(239, 68, 68, 0.6)",
              }}
            >
              {/* Progress background */}
              <div
                className="absolute left-0 top-0 h-full bg-accent/20 z-0"
                style={{
                  width: `${dragProgress}%`,
                  transition: isDragging ? "none" : "all 75ms",
                }}
              />

              {/* Slider thumb - Left arrow section that moves */}
              <div
                className="absolute h-full bg-accent flex items-center justify-center z-10"
                style={{
                  width: "80px",
                  left: "0",
                  transform: `translateX(${
                    (dragProgress / 100) *
                    ((sliderRef.current?.offsetWidth || 0) - 80)
                  }px)`,
                  transition: isDragging ? "none" : "all 75ms",
                }}
              >
                <span className="text-white text-4xl font-bold leading-none select-none pointer-events-none">
                  ›››
                </span>
              </div>

              {/* Text section */}
              <div className="flex-1 flex items-center justify-center z-0 pointer-events-none">
                <span className="font-mono text-white/60 uppercase tracking-[0.3em] text-lg select-none">
                  {isFullyUnlocked ? t("hero.unlock") : t("hero.access")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
