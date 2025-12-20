import cnesImg from "/icons/cnes1.png";
import camarinImg from "/icons/camarin.png";
import bestlinkImg from "/icons/bestlink.png";

export default function Education() {
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
    <section id="Education" className="py-20 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-10 text-green-400">
        Education
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto ">
        {schools.map((school, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-xl shadow hover:scale-105 transition p-6 text-center"
          >
            <img
              src={school.img}
              alt={school.title}
              className="w-auto mx-auto mb-3"
            />
            <h3 className="font-bold text-xl mb-2">{school.title}</h3>
            <p className="">{school.address}</p>
            <p className="mt-2 text-sm">{school.years}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
