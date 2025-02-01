"use client";

import { motion } from "framer-motion";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { fadeInOnScroll } from "@/motion/motionVariants";

const testimonial = [
  {
    name: "John Doe",
    message: "An affordable for manage course seamlessly and also smartly.",
  },
  {
    name: "Choton Dey",
    message:
      "Very easy to use and have tons of features which make it very easier to manage educational institution.",
  },
  {
    name: "Jony Chowdhury",
    message:
      "They are not only providing a CMS but also a lifestyle for an educational institute.",
  },
];

const Testimonial = () => {
  return (
    <section className="w-full xl:py-24 mb-24 xl:mb-32 flex justify-center items-center">
      <div className="container overflow-hidden">
        <motion.div
          variants={fadeInOnScroll(0.2, 0.6)}
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="h2 mb-4 text-center">What people are saying</h2>
          <p className="lead text-center mb-20">
            Hear directly from those who are already growing by using our CMS
            and made their services out of the box.
          </p>
        </motion.div>
        <motion.div
          variants={fadeInOnScroll(0.2, 0.6)}
          initial="hidden"
          whileInView="visible"
          className="flex"
        >
          <div className="flex">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex"
            >
              {testimonial.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="relative w-[460px] h-[300px] mr-12 rounded-2xl flex flex-col justify-center px-14"
                  >
                    <BiSolidQuoteLeft className="text-accent_secondary mb-3 text-3xl" />
                    <p className="mb-4 text-lg text-black/80">{item.message}</p>
                    <p className="text-xl">{item.name}</p>
                  </div>
                );
              })}
            </motion.div>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex"
            >
              {testimonial.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="relative w-[460px] h-[300px] mr-12 rounded-2xl flex flex-col justify-center px-14"
                  >
                    <BiSolidQuoteLeft className="text-accent_secondary mb-3 text-3xl" />
                    <p className="mb-4 text-lg text-black/80">{item.message}</p>
                    <p className="text-xl">{item.name}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
