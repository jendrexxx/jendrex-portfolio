import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-20 px-10 bg-gray-900 text-white w-full">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.6 }} // animate every time 60% visible
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold mb-6 text-green-400">About Me</h2>
        <p className="text-lg leading-relaxed">
          I am a passionate developer using create  web apps and learning new technologies and frameworks. My goal is to build efficient and scalable applications that provide great user experiences
          and solve loading problems effectively.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
