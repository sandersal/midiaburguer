import { motion } from "framer-motion";

const Portfolio = () => {
  // Placeholder images - in production these would be real portfolio pieces
  const images = Array(8).fill("https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=800&fit=crop");
  const videos = Array(4).fill("https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=711&fit=crop");

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Destaques{" "}
            <span className="gradient-fire bg-clip-text text-transparent">
              Visuais
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Conheça exemplos do nosso trabalho
          </p>
        </div>

        {/* Images Grid - 4x2 */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Posts & Artes</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative aspect-square rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Videos Grid - 1x4 */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">Reels & Stories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative aspect-[9/16] rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer"
              >
                <img
                  src={video}
                  alt={`Video ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
