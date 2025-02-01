"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "./Header";
import Button from "./Button";
import Link from "next/link";

function Hero() {
  const { scrollY } = useScroll();

  // Gradual transforms with extended range
  const imgTopPosition = useTransform(scrollY, [0, 1200], ["480px", "0px"]);
  const imgScale = useTransform(scrollY, [0, 600, 1200], [1, 1.3, 1.15]);

  const textOpacity = useTransform(scrollY, [0, 800], [1, 0]);
  const textScale = useTransform(scrollY, [0, 800], [1, 0.8]);
  const textDisplay = useTransform(scrollY, [0, 800], ["flex", "none"]);

  return (
    <section>
      <Header />
      <div className="container mx-auto flex flex-col items-center pb-[100px] min-h-[100vh] sm:min-h-[200vh]">
        {/* Text section */}
        <motion.div
          className="flex flex-col justify-center items-center gap-6 text-center mt-64 mb-12"
          style={{
            opacity: textOpacity,
            scale: textScale,
            display: textDisplay,
          }}
        >
          <h1 className="text-[60px] font-bold tracking-[-0.5px] leading-none max-w-[800px] xl:max-w-max">
            Change the way
            <br />
            to manage your course.
          </h1>
          <p className="max-w-[680px] text-[20px] text-black/80 font-light px-8 xl:px-0 mb-2">
            Streamline the way you manage your course, class, and students
            effortlessly with our platform under one roof.
          </p>
          <Link href="/sign-up">
            <Button btnText="Get Started" />
          </Link>
        </motion.div>

        {/* Image section */}
        <motion.div
          className="w-full h-[520px] bg-no-repeat sticky top-0 mx-auto max-w-[960px] hidden sm:block xxs:max-w-[200px] xs:max-w-[350px] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[800px] xl:max-w-[960px]"
          style={{
            backgroundImage: "url('/dashboard-demo.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            top: imgTopPosition,
            scale: imgScale,
          }}
        ></motion.div>
      </div>
    </section>
  );
}

export default Hero;
