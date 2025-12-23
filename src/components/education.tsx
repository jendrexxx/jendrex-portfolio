import { useState } from "react";
import { motion } from "framer-motion";
import cnesImg from "/icons/cnes1.png";
import camarinImg from "/icons/camarin.png";
import bestlinkImg from "/icons/bestlink.png";

interface EducationProps {
  triggerAnimation?: boolean;
}

export default function Education({ triggerAnimation }: EducationProps) {
  const [modalImg, setModalImg] = useState<string | null>(null);

  const schools = [
    {
      img: cnesImg,
      title: "Camarin Elementary School",
      address: "Phase 6, Camarin, Caloocan City North, 1422 Metro Manila",
      years: "2016 - 2019",
    },
    {
      img: camarinImg,
      title: "Camarin High School",
      address: "Cadena De Amor, Caloocan City North, Metro Manila",
      years: "2009 - 2015",
    },
    {
      img: bestlinkImg,
      title: "Bestlink College of the Philippines",
      address: "Quirino Hwy, Novaliches, Quezon City, Metro Manila",
      years: "2015 – 2019",
    },
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-green-400">
        Education
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {schools.map((school, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800 rounded-xl shadow-lg p-6 text-center flex flex-col items-center cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.6 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            onClick={() => setModalImg(school.img)} // open modal on click
          >
            <img
              src={school.img}
              alt={school.title}
              className="w-24 h-24 object-contain mb-4"
            />
            <h3 className="font-bold text-xl mb-2">{school.title}</h3>
            <p className="text-gray-300 text-sm">{school.address}</p>
            <p className="mt-2 text-green-400 font-medium">{school.years}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {modalImg && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setModalImg(null)} // close modal on click
        >
          <img
            src={modalImg}
            alt="Full"
            className="max-h-full max-w-full rounded-lg shadow-lg"
          />
        </div>
      )}
    </section>
  );
}
