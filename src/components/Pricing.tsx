import PricingCard from "./PricingCard";

const Pricing = () => {
  const packages = [
    {
      title: "Pacote Essencial",
      subtitle: "Material de Alta Qualidade e que Engaja",
      price: "R$ 300",
      icon: "🍟",
      gradient: "fire" as const,
      features: [
        "20 artes mensais (posts estáticos)",
        "20 stories adaptados",
        "Edição Profissional dentro da identidade da marca",
      ],
      description:
        "Ideal para hamburguerias, Lanches e Restaurantes que querem padronizar suas postagens.",
    },
    {
      title: "Pacote Pro",
      subtitle: "Presença diária com design que abre o apetite",
      price: "R$ 600",
      icon: "🍕",
      gradient: "cheese" as const,
      features: [
        "24 artes mensais (posts e carrosséis) — 1 por dia",
        "24 stories — 1 por dia",
        "2 vídeos curtos para Reels (1º e 3º semana)",
        "Criação de legendas e títulos chamativos com hashtags estratégicas",
        "Acompanhamento e ajustes de identidade visual do perfil",
      ],
      description:
        "Ideal para seu negócio em crescimento que precisa aumentar o engajamento.",
    },
    {
      title: "Pacote Premium",
      subtitle: "Conteúdo completo com direção de arte e calendário estratégico",
      price: "R$ 1.200",
      icon: "🥇",
      gradient: "accent" as const,
      features: [
        "30 artes mensais (posts + animações curtas) — 1 por dia",
        "30 stories personalizados — 1 por dia",
        "4 vídeos curtos (Reels + Stories animados) — 1 por semana",
        "Criação de legendas e hashtags estratégicas",
        "Planejamento de conteúdo com calendário sazonal",
        "Direção de arte e ajustes de identidade visual integrada",
      ],
      description:
        "Perfeito para marcas que desejam profissionalizar sua presença digital.",
    },
  ];

  return (
    <section id="pricing-section" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Escolha o{" "}
            <span className="text-secondary">
              Pacote Perfeito
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Soluções completas para cada etapa do seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <PricingCard key={index} {...pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
