import { Zap, Target, Palette, Code, TrendingUp, Video } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Digital Strategy",
    japanese: "戦略",
    description: "Data-driven marketing strategies that penetrate the noise and reach your target audience.",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    japanese: "ブランド",
    description: "Creating memorable visual identities that stand out in the digital landscape.",
  },
  {
    icon: Code,
    title: "Web Development",
    japanese: "開発",
    description: "Cutting-edge websites and applications built for the future.",
  },
  {
    icon: Target,
    title: "Paid Advertising",
    japanese: "広告",
    description: "Precision-targeted campaigns across all major platforms.",
  },
  {
    icon: TrendingUp,
    title: "SEO & Analytics",
    japanese: "分析",
    description: "Deep insights and optimization for maximum organic reach.",
  },
  {
    icon: Video,
    title: "Content Creation",
    japanese: "コンテンツ",
    description: "Engaging multimedia content that tells your story.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 md:py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-primary/60 tracking-[0.3em] uppercase">
            // Services
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground italic mt-4 mb-2">
            What We <span className="text-primary neon-text">Execute</span>
          </h2>
          <span className="font-japanese text-xl text-primary/60">サービス</span>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-6 bg-card/50 border border-primary/10 hover:border-primary/50 transition-all duration-500 hover:shadow-neon-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors" />

              {/* Icon */}
              <div className="mb-4 relative">
                <service.icon 
                  size={40} 
                  className="text-primary group-hover:text-accent transition-colors duration-300" 
                  strokeWidth={1.5}
                />
                <div className="absolute -top-2 -left-2 font-mono text-xs text-muted-foreground">
                  0{index + 1}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-mono text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <span className="font-japanese text-sm text-primary/60 block mb-3">
                {service.japanese}
              </span>

              {/* Description */}
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
