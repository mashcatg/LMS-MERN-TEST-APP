import { motion } from "framer-motion";
import { fadeInOnScroll } from "@/motion/motionVariants";
import { FaUser, FaCity, FaBuilding } from "react-icons/fa";

const CounterCard = ({ label, count, icon: Icon }) => (
  <motion.div
    variants={fadeInOnScroll(0.2, 0.6)}
    initial="hidden"
    whileInView="visible"
    className="bg-white p-8 rounded-lg shadow-lg flex items-center space-x-4"
  >
    <div className="p-4 bg-blue-500 text-white rounded-full">
      <Icon className="w-10 h-10" />
    </div>
    <div>
      <h2 className="text-4xl font-bold text-gray-800">{count}</h2>
      <p className="text-gray-600">{label}</p>
    </div>
  </motion.div>
);

const Counters = () => {
  return (
    <section className="w-full py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <CounterCard
            label="Total Students"
            count={1234} // Replace with dynamic data
            icon={FaUser}
          />
          <CounterCard
            label="Total Cities"
            count={567} // Replace with dynamic data
            icon={FaCity}
          />
          <CounterCard
            label="Total Organizations"
            count={89} // Replace with dynamic data
            icon={FaBuilding}
          />
        </div>
      </div>
    </section>
  );
};

export default Counters;
