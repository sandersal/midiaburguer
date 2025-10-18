import { motion } from "framer-motion";
import { Utensils, Film, TrendingUp } from "lucide-react";

const Concept = () => {
  const features = [
    {
      icon: Utensils,
      label: "Design Gastronômico",
      lottieUrl: "https://lottie.host/17558f35-0842-4dc8-a612-0e3e4eb8f6b3/pkv3CDZSkt.lottie",
    },
    {
      icon: Film,
      label: "Reels de Impacto",
      lottieUrl: "https://lottie.host/db46ffd9-c663-4939-9c0e-b8cdbcc6747c/MNM1Wa35AM.lottie",
    },
    {
      icon: TrendingUp,
      label: "Engajamento Real",
      lottieUrl: "https://lottie.host/606afe1f-3d35-4fe3-900c-98b465314367/G4Ql9Re946.lottie",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Conteúdos que{" "}
            <span className="text-primary">
              dão água na boca
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Artes criadas para abrir o apetite e aumentar o engajamento
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <motion.div
                className="w-32 h-32 flex items-center justify-center"
              >
                <dotlottie-wc 
                  src={feature.lottieUrl} 
                  style={{ width: '128px', height: '128px' }} 
                  autoplay 
                  loop
                />
              </motion.div>
              <h3 className="text-xl font-bold text-center">{feature.label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Concept;
