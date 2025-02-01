import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import { motion } from "framer-motion";

import Logo from "./Logo";
import {
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaGlobe,
} from "react-icons/fa";

const icons = [
  {
    src: <FaLinkedin />,
    href: "https://www.linkedin.com",
  },
  {
    src: <FaFacebook />,
    href: "https://www.facebook.com",
  },
  {
    src: <FaYoutube />,
    href: "https://www.youtube.com",
  },
  {
    src: <FaInstagram />,
    href: "https://www.instagram.com",
  },
];

const iconAnimation = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};

const textAnimation = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Footer = () => {
  return (
    <footer className="py-12">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center gap-12 xl:justify-between">
          {/* Ennovat Logo and Social Icons */}
          <div className="flex justify-start gap-8 flex-1">
            <motion.div
              className="relative w-8 h-8"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              variants={iconAnimation}
              initial="initial"
              whileInView="animate"
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              custom={0} // Applying custom animation to Ennovat icon
            >
              <Link href="https://ennovat.com" passHref>
                <ExportedImage
                  src="/ennovat-icon.png"
                  alt="Ennovat"
                  fill
                  className="object-contain"
                />
              </Link>
            </motion.div>
            {icons.map((icon, index) => (
              <Link href={icon.href} key={index} passHref>
                <motion.div
                  className="text-accent_secondary hover:text-accent_tertiary transition-colors duration-300 ease-in-out text-3xl"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  variants={iconAnimation}
                  initial="initial"
                  whileInView="animate"
                  custom={index + 1} // Stagger effect for social icons
                  aria-label={`Social media icon ${index}`}
                >
                  {icon.src}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Logo */}
          <motion.div
            className="flex-1 flex justify-center"
            variants={textAnimation}
            initial="initial"
            whileInView="animate"
          >
            <Logo />
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="flex-1 flex justify-end font-light text-gray-700"
            variants={textAnimation}
            initial="initial"
            whileInView="animate"
          >
            &copy; {new Date().getFullYear()} Ennovat. All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
