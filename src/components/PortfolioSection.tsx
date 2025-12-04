import { useState } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "CYBER CORP",
    japanese: "サイバー",
    category: "Brand Identity",
    description: "Complete visual overhaul for a tech startup",
  },
  {
    id: 2,
    title: "NEURAL NET",
    japanese: "ニューラル",
    category: "Web Development",
    description: "AI-powered platform interface design",
  },
  {
    id: 3,
    title: "TOKYO DRIFT",
    japanese: "東京",
    category: "Digital Campaign",
    description: "Viral marketing campaign for automotive brand",
  },
  {
    id: 4,
    title: "QUANTUM",
    japanese: "量子",
    category: "Strategy",
    description: "Go-to-market strategy for fintech product",
  },
];

const PortfolioSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="portfolio" className="relative py-24 md:py-32 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-primary/60 tracking-[0.3em] uppercase">
            // Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground italic mt-4 mb-2">
            Our <span className="text-primary neon-text">Work</span>
          </h2>
          <span className="font-japanese text-xl text-primary/60">作品集</span>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-[16/10] overflow-hidden border border-primary/20 hover:border-primary transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Background gradient */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br from-background via-card to-primary/10 transition-all duration-500 ${
                  hoveredId === project.id ? 'opacity-100' : 'opacity-80'
                }`}
              />

              {/* Grid pattern */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `
                    linear-gradient(hsl(var(--primary) / 0.5) 1px, transparent 1px),
                    linear-gradient(90deg, hsl(var(--primary) / 0.5) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px',
                }}
              />

              {/* Content */}
              <div className="relative h-full p-6 md:p-8 flex flex-col justify-between">
                {/* Top */}
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-primary/60">
                    0{project.id}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Center - Title */}
                <div className="text-center">
                  <span className="font-japanese text-lg text-primary/40 block mb-2">
                    {project.japanese}
                  </span>
                  <h3 
                    className={`font-display text-3xl md:text-4xl lg:text-5xl text-foreground italic transition-all duration-300 ${
                      hoveredId === project.id ? 'glitch text-primary' : ''
                    }`}
                    data-text={project.title}
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Bottom */}
                <div className="flex items-end justify-between">
                  <p className="font-mono text-xs md:text-sm text-muted-foreground max-w-[60%]">
                    {project.description}
                  </p>
                  <div 
                    className={`flex items-center gap-2 text-primary transition-all duration-300 ${
                      hoveredId === project.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                    }`}
                  >
                    <span className="font-mono text-xs uppercase">View</span>
                    <ExternalLink size={14} />
                  </div>
                </div>
              </div>

              {/* Hover border effect */}
              <div className={`absolute inset-0 border-2 border-primary transition-all duration-300 ${
                hoveredId === project.id ? 'opacity-100' : 'opacity-0'
              }`} />
              
              {/* Corner accents on hover */}
              <div className={`absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary transition-all duration-300 ${
                hoveredId === project.id ? 'opacity-100' : 'opacity-0'
              }`} />
              <div className={`absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary transition-all duration-300 ${
                hoveredId === project.id ? 'opacity-100' : 'opacity-0'
              }`} />
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <button className="font-mono text-sm uppercase tracking-wider text-primary border border-primary/50 px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-neon-sm">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
