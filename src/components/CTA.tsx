import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const CTA = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de receber um orçamento personalizado para gestão de redes sociais."
    );
    window.open(`https://wa.me/5593991872819?text=${message}`, "_blank");
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10" />
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1920&h=1080&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)",
        }}
      />
      
      {/* Animated Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          "https://lottie.host/881af702-a9dd-46b7-ad07-5b8502b15daf/HeNEZ4RZoh.lottie",
          "https://lottie.host/f1e9b418-ae82-4aee-b9f5-db412d5cc0af/dTxjznDEdI.lottie",
        ].map((lottieUrl, i) => (
          <motion.div
            key={i}
            className="absolute opacity-20"
            initial={{ 
              y: Math.random() * window.innerHeight,
              x: -150 
            }}
            animate={{
              x: window.innerWidth + 150,
            }}
            transition={{
              duration: 15 + Math.random() * 5,
              repeat: Infinity,
              delay: i * 3,
              ease: "linear",
            }}
            style={{
              top: `${20 + i * 40}%`,
            }}
          >
            <dotlottie-wc 
              src={lottieUrl} 
              style={{ width: '200px', height: '200px' }} 
              autoplay 
              loop
            />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Pronto para deixar seu perfil com{" "}
            <span className="text-primary">
              sabor profissional?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12"
          >
            Selecione seu pacote acima e fale direto conosco.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-8 text-xl font-bold rounded-full shadow-glow hover:shadow-elevated transition-all duration-300 hover:scale-105"
            >
              <motion.span 
                className="relative z-10 flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
              >
                <MessageCircle className="w-6 h-6" />
                Falar com Especialista no WhatsApp
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </motion.span>
              
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-muted-foreground"
          >
            Resposta em menos de 24 horas • Sem compromisso
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
