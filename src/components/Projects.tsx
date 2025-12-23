import { motion } from "framer-motion";
import overtimeImg from "/photo/overtime.png";
import undertimeImg from "/photo/undertime.png";
import medicalImg from "/photo/medical availment.png";
import reimbursementImg from "/photo/reimbursement.png";

const projects = [
  {
    img: overtimeImg,
    title: "Overtime System",
    desc: "Laravel + Livewire + MySQL application with PDF export, overtime tracking, and approvals.",
  },
  {
    img: undertimeImg,
    title: "Undertime System",
    desc: "Real-time charts, analytics, and Livewire components to track undertime requests.",
  },
  {
    img: medicalImg,
    title: "Medical System",
    desc: "PDF forms, approval workflows, and employee claims management.",
  },
  {
    img: reimbursementImg,
    title: "Reimbursement System",
    desc: "Handles reimbursement requests, approvals, and PDF tracking.",
  },
];

function FlipCard({ project, idx }: { project: typeof projects[0]; idx: number }) {
  return (
    <motion.div
      className="w-full h-64 perspective"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.6 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
    >
      <motion.div
        className="relative w-full h-full cursor-pointer"
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full rounded-xl overflow-hidden shadow-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white text-center">
            <h3 className="text-lg font-bold">{project.title}</h3>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full rounded-xl bg-gray-800 flex flex-col justify-center items-center p-4 text-white text-center"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
        >
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-sm">{project.desc}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 text-white bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-green-400 text-center">
          Featured Projects
        </h2>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <FlipCard key={idx} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
