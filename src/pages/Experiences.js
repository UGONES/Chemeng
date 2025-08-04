import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../compontents/SectionHeader';
import { FaIndustry } from 'react-icons/fa';

// 🔩 Highlighted Projects
const highlightedProjects = (t) => [
  {
    name: t("experiences.refinery"),
    images: ["/assets/project1.jpg", "/assets/project2.jpg", "/assets/project3.jpg"],
    logo: <FaIndustry />,
  },
  {
    name: t("experiences.pipeline"),
    images: ["/assets/project2.jpg", "/assets/project3.jpg", "/assets/project1.jpg"],
    logo: <FaIndustry />,
  },
];

const scrollingImages = [
  "/assets/project1.jpg",
  "/assets/project2.jpg",
  "/assets/project3.jpg",
  "/assets/service1-consluting.jpg",
  "/assets/161021_umang_clemens_chem_eng_065_205784_001.jpg",
  "/assets/221122_ugp_study_guide_ug_rush_079.jpg",
];

const Experiences = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 pt-24 pb-10 px-4">
      {/* 🔹 Highlighted Projects */}
      <div className="max-w-xl mx-auto bg-white rounded-xl p-8 shadow-lg border border-gray-200 mb-20">
        <SectionHeader title={t("experiences.highlightedProjectsTitle")} subtitle={t("experiences.highlightedProjectsSubtitle")} />
        <div className="grid md:grid-cols-2 gap-8">
          {highlightedProjects(t).map((project, index) => (
            <div key={index} className="bg-softWhite border rounded-xl shadow p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-primary">{project.name}</h3>
                <button className="text-white bg-primary p-2 rounded-full hover:bg-tealAccent transition-colors">
                  {project.logo}
                </button>
              </div>
              <div className="relative h-56 overflow-hidden rounded-md border border-gray-300">
                <Carousel images={project.images} interval={3000} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 Our Clients Section */}
      <div className="max-w-3xl mx-auto bg-gray-50 rounded shadow-lg border-2 border-softBlack px-6 py-10">
        <h2 className="text-2xl font-bold text-center text-primary mb-8">
          {t("experiences.clientsTitle")}
        </h2>

        <div className="overflow-hidden mb-6">
          <div className="flex space-x-6 animate-scroll-left" style={{ animationDuration: "15s" }}>
            {[...scrollingImages, ...scrollingImages].map((src, i) => (
              <img key={i} src={src} alt={`Client ${i}`} className="h-28 w-auto object-cover rounded shadow" />
            ))}
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="flex space-x-6 animate-scroll-right" style={{ animationDuration: "15s" }}>
            {[...scrollingImages, ...scrollingImages].map((src, i) => (
              <img key={i + 100} src={src} alt={`Client ${i}`} className="h-28 w-auto object-cover rounded shadow" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// 🔄 Image Carousel
const Carousel = ({ images, interval = 3000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % images.length), interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="w-full h-full relative">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Slide ${i}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default Experiences;
