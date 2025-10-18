import { motion } from "framer-motion";

// 🔽 importe as imagens e vídeos locais
import post1 from "@/assets/images/1.jpg";
import post2 from "@/assets/images/2.jpg";
import post3 from "@/assets/images/3.jpg";
import post4 from "@/assets/images/4.jpg";
import post5 from "@/assets/images/5.jpg";
import post6 from "@/assets/images/6.jpg";
import post7 from "@/assets/images/7.jpg";
import post8 from "@/assets/images/8.jpg";

import reel1 from "@/assets/videos/9.mp4";
import reel2 from "@/assets/videos/10.mp4";
import story1 from "@/assets/videos/11.mp4";
import story2 from "@/assets/videos/12.mp4";

const Portfolio = () => {
  const images = [1, 2, 3, 4, 5, 6, 7, 8];
  const videos = [9, 10, 11, 12];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Destaques{" "}
            <span className="text-secondary">
              Visuais
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Conheça exemplos do nosso trabalho
          </p>
        </div>

        {/* Imagens */}
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

        {/* Vídeos */}
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
                <video
                  src={video}
                  muted
                  loop
                  autoPlay
                  playsInline
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
