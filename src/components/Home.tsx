import { useState } from "react";
import { motion } from "framer-motion";
import photo from "/photo/pic1.jpg";
import mssql from "/icons/mssql.png";

function Home() {
  const [isOpen, setIsOpen] = useState(false); // fullscreen modal state

  const skills = [
    { src: "https://cdn-icons-png.flaticon.com/512/732/732212.png", alt: "HTML" },
    { src: "https://cdn-icons-png.flaticon.com/512/732/732190.png", alt: "CSS" },
    { src: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg", alt: "Laravel" },
    { src: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png", alt: "MySQL" },
    { src: mssql, alt: "MS SQL Server" },
    { src: "https://cdn-icons-png.flaticon.com/512/919/919830.png", alt: "PHP" },
    { src: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png", alt: "JavaScript" },
    { src: "https://cdn-icons-png.flaticon.com/512/2165/2165004.png", alt: "REST API" },
  ];

  return (
    <>
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 gap-10 bg-gray-900 text-white pt-24"
      >
        {/* Left side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center md:justify-start cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <img
            src={photo}
            alt="Profile"
            className="w-80 h-80 object-cover rounded-full shadow-lg mb-6"
          />
        </motion.div>

        {/* Right side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-5xl font-extrabold mb-4">
            Hi, I'm <span className="text-green-600">Jendrex Lagando</span>
          </h1>

          {/* Skills Icons */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.6 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-6"
          >
            {skills.map((icon, index) => (
              <motion.img
                key={index}
                src={icon.src}
                alt={icon.alt}
                className="w-12 h-12 mx-auto"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.6 }}
            transition={{ delay: 0.5 }}
            className="text-lg"
          >
            I am a self-taught UI/UX designer and web developer with over 3 years
            of experience building web applications using{" "}
            <span className="font-semibold text-green-600">Laravel</span>. I focus
            on creating meaningful and delightful digital products that balance
            user needs with business goals.
          </motion.p>
        </motion.div>
      </section>

      {/* Fullscreen Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.img
            src={photo}
            alt="Profile Fullscreen"
            className="max-h-full max-w-full rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
    </>
  );
}

export default Home;
