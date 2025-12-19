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

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 text-white bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-green-400 text-center">
          Featured Projects
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Featured Project - Clickable */}
          <a
            href="#overtime" // Replace with your link
            className="relative rounded-xl overflow-hidden shadow-lg block hover:scale-105 transition-transform"
          >
            <img
              src={projects[0].img}
              alt={projects[0].title}
              className="w-full h-64 md:h-80 object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-center p-6 rounded-xl">
              <span className="text-sm text-purple-400 uppercase mb-2">
                Featured Project
              </span>
              <h3 className="text-3xl font-bold mb-2">{projects[0].title}</h3>
              <p className="text-gray-200">{projects[0].desc}</p>
            </div>
          </a>

          {/* Other Projects List */}
          <div className="grid grid-cols-1 gap-6">
            {projects.slice(1).map((project, idx) => (
              <a
                key={idx}
                href={`#${project.title.replace(/\s+/g, "-").toLowerCase()}`} // Replace with actual link
                className="flex flex-col md:flex-row items-center rounded-xl overflow-hidden shadow-lg bg-gray-800 hover:scale-105 transition-transform"
              >
                {/* Left side - Image */}
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full md:w-48 h-48 object-cover"
                />

                {/* Right side - Text */}
                <div className="p-6 md:p-4 md:flex-1">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm">{project.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

