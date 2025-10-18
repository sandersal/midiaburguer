import { motion } from "framer-motion";
import { Target, Calendar, Palette, TrendingUp, Video } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Target,
      title: "Estratégia de Conteúdo Sazonal",
      description: "Campanhas planejadas para datas especiais e eventos",
      lottieUrl: "https://lottie.host/25b5499b-a1b4-4672-9e3f-f79cac50105d/oFIFK59TjO.lottie",
    },
    {
      icon: Calendar,
      title: "Entregas Pontuais",
      description: "Cronograma organizado com antecedência",
      lottieUrl: "https://lottie.host/46ef8205-730d-4adb-87a9-72cf971b6d99/OwAYAePR1o.lottie",
    },
    {
      icon: Palette,
      title: "Direção de Arte Personalizada",
      description: "Design exclusivo que reflete sua marca",
      lottieUrl: "https://lottie.host/511039c1-4666-4785-9bcc-f723571ce970/6RekGMd3I0.lottie",
    },
    {
      icon: TrendingUp,
      title: "Engajamento Real",
      description: "Conteúdo criado para converter seguidores em clientes",
      lottieUrl: "https://lottie.host/1f781a3e-66e7-47ce-a964-59a54d77897b/fOKrTXUmVL.lottie",
    },
    {
      icon: Video,
      title: "Reels & Stories que Convertem",
      description: "Vídeos otimizados para máximo alcance",
      lottieUrl: "https://lottie.host/9ad865fa-1305-439f-8977-2b803cb461b0/abQ4awPgSW.lottie",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Por que escolher{" "}
            <span className="gradient-fire bg-clip-text text-transparent">
              nossos serviços?
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-card p-8 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300">
                <motion.div
                  className="w-24 h-24 flex items-center justify-center mb-6"
                >
                  <dotlottie-wc 
                    src={benefit.lottieUrl} 
                    style={{ width: '96px', height: '96px' }} 
                    autoplay 
                    loop
                  />
                </motion.div>
                
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
