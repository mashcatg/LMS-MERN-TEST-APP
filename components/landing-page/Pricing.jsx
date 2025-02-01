"use client";

import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { motion } from "framer-motion";
import { fadeInOnScroll } from "@/motion/motionVariants";

const Pricing = () => {
  const [students, setStudents] = useState(1000); // Default value
  const [price, setPrice] = useState(2500); // Default price

  // Function to handle the slider value changes
  const handleSliderChange = (value) => {
    setStudents(value);

    if (value <= 50) {
      setPrice(0);
    } else if (value <= 100) {
      setPrice(800);
    } else if (value <= 250) {
      setPrice(1200);
    } else if (value <= 500) {
      setPrice(1800);
    } else if (value <= 1000) {
      setPrice(2500);
    } else if (value <= 2500) {
      setPrice(5000);
    } else if (value <= 5000) {
      setPrice(8000);
    } else if (value <= 10000) {
      setPrice(14000);
    } else {
      setPrice(30000);
    }
  };

  return (
    <section className="py-24 xl:py-32 min-h-[720px] xl:mt-32 px-6">
      <motion.div
        className="container mx-auto text-center"
        variants={fadeInOnScroll(0.2, 0.6)}
        initial="hidden"
        whileInView="visible"
      >
        <h2 className="text-3xl xl:text-5xl font-bold mb-6">Pricing</h2>
        <p className="text-lg xl:text-xl mb-12">
          Select the number of students to see your monthly pricing.
        </p>

        <div className="max-w-lg mx-auto">
          {/* Slider */}
          <Slider
            min={1}
            max={10000}
            defaultValue={students}
            onChange={handleSliderChange}
            trackStyle={{ backgroundColor: "#13d49a", height: 6 }}
            handleStyle={{
              borderColor: "#13d49a",
              height: 24,
              width: 24,
              marginLeft: -12,
              marginTop: -9,
              backgroundColor: "#ffffff",
            }}
            railStyle={{ backgroundColor: "#e5e7eb", height: 6 }}
          />

          {/* Display Current Number of Students */}
          <div className="mt-8">
            <span className="text-2xl font-semibold">{students}</span>{" "}
            <span className="text-lg">students</span>
          </div>

          {/* Display Pricing Based on Number of Students */}
          <div className="mt-4">
            <h3 className="text-3xl font-bold text-green-500">
              {price} BDT / month
            </h3>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Pricing;
