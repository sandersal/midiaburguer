import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  description: string;
  icon: string;
  gradient: "fire" | "cheese" | "accent";
  index: number;
}

const PricingCard = ({
  title,
  subtitle,
  price,
  features,
  description,
  icon,
  gradient,
  index,
}: PricingCardProps) => {
  const gradientClass = {
    fire: "gradient-fire",
    cheese: "gradient-cheese",
    accent: "bg-accent",
  }[gradient];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Olá! Gostaria de saber mais sobre o ${title}.`
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative bg-card rounded-3xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 border-2 border-transparent hover:border-primary/20">
        {/* Icon Badge */}
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className={`w-16 h-16 ${gradientClass} rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-glow`}
        >
          {icon}
        </motion.div>

        {/* Title */}
        <h3 className="text-3xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-6">{subtitle}</p>

        {/* Price */}
        <div className="mb-8">
          <span className="text-5xl font-bold text-primary">
            {price}
          </span>
          <span className="text-muted-foreground text-lg">/mês</span>
        </div>

        {/* Features */}
        <ul className="space-y-4 mb-8">
          {features.map((feature, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + i * 0.1 }}
              className="flex items-start gap-3"
            >
              <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-sm leading-relaxed">{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-6 italic">
          {description}
        </p>

        {/* CTA Button */}
        <Button
          onClick={handleWhatsAppClick}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 rounded-xl shadow-glow hover:shadow-elevated transition-all duration-300 hover:scale-105"
        >
          Solicitar Orçamento
        </Button>
      </div>
    </motion.div>
  );
};

export default PricingCard;
