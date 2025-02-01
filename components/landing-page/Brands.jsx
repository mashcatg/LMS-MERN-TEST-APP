"use client";

import ExportedImage from "next-image-export-optimizer";
import { motion } from "framer-motion";
import { fadeInOnScroll } from "@/motion/motionVariants";

const brandsImages = [
  { src: "/brand-logo-1.webp", alt: "LogoIpsum" },
  { src: "/brand-logo-2.webp", alt: "LogoIpsum" },
  { src: "/brand-logo-1.webp", alt: "LogoIpsum" },
  { src: "/brand-logo-2.webp", alt: "LogoIpsum" },
  { src: "/brand-logo-1.webp", alt: "LogoIpsum" },
  { src: "/brand-logo-2.webp", alt: "LogoIpsum" },
  { src: "/brand-logo-1.webp", alt: "LogoIpsum" },
  { src: "/brand-logo-2.webp", alt: "LogoIpsum" },
];

const Brands = () => {
  return (
    <section className="overflow-hidden">
      <motion.div
        variants={fadeInOnScroll(0.2, 0.6)}
        initial="hidden"
        whileInView="visible"
        className="relative w-full mx-auto overflow-hidden container"
      >
        <p className="text-xl font-semiboldd text-center mb-12 mt-24 relative xs:text-sm xxs:text-sm">
          Join{" "}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-300/80 to-teal-600/80">
            100+ organizations
          </span>{" "}
          already growing
        </p>

        <motion.div
          className="flex space-x-12"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {brandsImages.map((item, index) => (
            <div key={index} className="relative w-52 h-20 flex-shrink-0">
              <ExportedImage
                src={item.src}
                fill
                alt={item.alt}
                className="object-contain"
              />
            </div>
          ))}
          {/* Duplicate the logos for seamless scrolling */}
          {brandsImages.map((item, index) => (
            <div
              key={`dup-${index}`}
              className="relative w-52 h-20 flex-shrink-0"
            >
              <ExportedImage
                src={item.src}
                fill
                alt={item.alt}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Brands;
