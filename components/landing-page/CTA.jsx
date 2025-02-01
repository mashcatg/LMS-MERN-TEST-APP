import { motion } from "framer-motion";
import { fadeInOnScroll } from "@/motion/motionVariants";
import ButtonTeritiary from "./ButtonTertiary";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="xl:mb-32 w-full">
      <motion.div
        variants={fadeInOnScroll(0.2, 0.6)}
        initial="hidden"
        whileInView="visible"
        className="py-24 w-full xl:max-w-[1280px] mx-auto min-h-[300px] bg-gradient-to-r from-accent_secondary via-accent_tertiary to-accent_secondary h-full flex items-center xl:rounded-2xl"
      >
        <div className="flex flex-col xl:flex-row items-center justify-between w-full xl:px-24">
          <div>
            <div className="text-center mb-12 xl:mb-0 xl:text-left">
              <h2 className="text-[40px] leading-tight font-bold mb-2 text-white">
                Start now for free
              </h2>
              <p className="text-xl font-light max-w-[400px] md:max-w-[560px] mx-auto xl:mx-0 text-white/90">
                Experience the full power of our platform even for free. No
                payment details required.
              </p>
            </div>
          </div>
          <div>
            <Link href="/sign-up">
              <ButtonTeritiary btnText="Start now" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
