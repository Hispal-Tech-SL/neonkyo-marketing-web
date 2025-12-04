import { useEffect, useState, useRef } from "react";

const hackingSequence = [
  { text: "database = {", delay: 100 },
  { text: '    "confidential_info": "Ultra secret data",', delay: 50 },
  { text: '    "other_data": "Less relevant information"', delay: 50 },
  { text: "}", delay: 100 },
  { text: "", delay: 200 },
  { text: "def hack_database():", delay: 100 },
  { text: '    print("Accessing the database...")', delay: 50 },
  { text: "    time.sleep(2)", delay: 50 },
  { text: "", delay: 300 },
  { text: ">>> Initiating hacking sequence...", delay: 500 },
  { text: ">>> Locating target network...", delay: 400 },
  { text: ">>> Identifying vulnerabilities...", delay: 600 },
  { text: ">>> Infiltrating the system...", delay: 800 },
  { text: ">>> Access granted!", delay: 300 },
  { text: "", delay: 200 },
  { text: ">>> Accessing the database...", delay: 500 },
  { text: ">>> Establishing secure connection...", delay: 400 },
  { text: ">>> Bypassing firewalls...", delay: 600 },
  { text: ">>> Hacking the password...", delay: 800 },
  { text: ">>> Access granted.", delay: 300 },
  { text: ">>> Downloading confidential files...", delay: 1000 },
  { text: ">>> Operation completed successfully!", delay: 500 },
  { text: "", delay: 200 },
  { text: '>>> Confidential information obtained: "Ultra secret data"', delay: 500 },
  { text: "", delay: 1000 },
  { text: ">>> System compromised. Neonkyo Studio was here.", delay: 800 },
];

const HackerBackground = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentLineIndex >= hackingSequence.length) {
      // Reset and start again
      const timeout = setTimeout(() => {
        setLines([]);
        setCurrentLineIndex(0);
      }, 3000);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setLines((prev) => [...prev, hackingSequence[currentLineIndex].text]);
      setCurrentLineIndex((prev) => prev + 1);
    }, hackingSequence[currentLineIndex].delay);

    return () => clearTimeout(timeout);
  }, [currentLineIndex]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Terminal code */}
      <div 
        ref={containerRef}
        className="absolute inset-0 p-4 md:p-8 overflow-hidden"
        style={{ fontFamily: "'Fira Code', monospace" }}
      >
        <div className="max-w-4xl mx-auto opacity-20">
          {lines.map((line, index) => (
            <div
              key={index}
              className={`text-xs md:text-sm ${
                line.startsWith(">>>") 
                  ? line.includes("granted") || line.includes("completed") || line.includes("obtained")
                    ? "text-primary" 
                    : line.includes("Neonkyo")
                      ? "text-accent"
                      : "text-muted-foreground"
                  : "text-muted-foreground/50"
              }`}
              style={{
                animation: 'fade-in 0.3s ease-out',
              }}
            >
              {line || '\u00A0'}
            </div>
          ))}
          <span className="text-primary cursor-blink" />
        </div>
      </div>

      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-x-0 h-px bg-primary/10 animate-scanline"
          style={{ top: '-100%' }}
        />
      </div>

      {/* Vignette effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, hsl(var(--background)) 100%)',
        }}
      />
    </div>
  );
};

export default HackerBackground;
