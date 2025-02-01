"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ExportedImage from "next-image-export-optimizer";
import { FaRegCheckCircle } from "react-icons/fa";

const featuresData = [
  {
    imgSrc: "/dashboard-demo.png",
    title: "Classess, Notes & Quiz Management",
    description: "Organize your curriculumn in a seamless way",
    highlights: [
      "Arrange class chapter and serial wise.",
      "Take class-based quiz securely",
      "Provide notes according to class",
    ],
  },
  {
    imgSrc: "/dashboard-demo.png",
    title: "Manage CQ and MCQ exam",
    description: "Manage exam result efforlessly in an efficiant way",
    highlights: [
      "Manage result of offline exams effortlessly.",
      "Take online MCQ exam securely.",
      "Manage results model test in clicks.",
    ],
  },
  {
    imgSrc: "/dashboard-demo.png",
    title: "Student & Report Card",
    description: "Provide Admit, Result, Invitation cards in clicks",
    highlights: [
      "Provide report cards according to exam results easily.",
      "Give admit card for exams in clicks.",
      "Create invitation and other type of card in need.",
    ],
  },
  {
    imgSrc: "/dashboard-demo.png",
    title: "SMS Management",
    description: "Send Result, Notice, Attendance SMS in one click",
    highlights: [
      "Send SMS according with exam results in seconds.",
      "SMS notices in one click.",
      "Send SMS with attendance report.",
    ],
  },
];

const Features = () => {
  const [index, setIndex] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    setImgIndex(index);
  }, [index]);

  return (
    <section className="text-black pt-32 relative">
      <div className="container mx-auto">
        <div className="flex gap-16">
          <motion.div
            key={featuresData[index].imgSrc}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.4,
              ease: [0.6, -0.05, 0.01, 0.99],
              delay: 0.2,
            }}
            className="hidden md:flex justify-center flex-1 w-full h-[480px] sticky top-[calc(50%-240px)]"
          >
            <div className="relative w-full h-full">
              <ExportedImage
                src={featuresData[imgIndex].imgSrc}
                fill
                alt=""
                className="h-full object-contain"
              />
            </div>
          </motion.div>

          <div className="flex-1 flex flex-col gap-24 md:max-w-[50%]">
            {featuresData.map((item, itemIndex) => {
              return (
                <motion.div
                  onViewportEnter={() => setIndex(itemIndex)}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ amount: "all" }}
                  key={itemIndex}
                  className="w-full h-auto xl:h-[480px] flex items-center"
                >
                  <div className="w-[80vw] xl:w-auto mx-auto xl:mx-0">
                    <h2 className="h2 mb-4"> {item.title}</h2>
                    <p className="lead mb-2">{item.description}</p>
                    <div className="flex flex-col gap-5">
                      {item.highlights.map((highlight, index) => {
                        return (
                          <div key={index} className="flex items-center gap-4">
                            <FaRegCheckCircle className="text-accent_secondary text-2xl" />
                            <p>{highlight}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
