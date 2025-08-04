import { useTranslation } from "react-i18next";
import SectionHeader from "../../compontents/SectionHeader";

const members = [
  {
    name: "Dr. Jane Doe",
    role: "Senior Process Engineer",
    img: "/assets/expert1.jpg",
  },
  { name: "Prof. John Smith", role: "Thermodynamics Lead", img: "/assets/expert2.jpg" },
  { name: "Engr. Ada Okoro", role: "Research & Development", img: "/assets/expert3.jpg" },
  { name: "Engr. Yusuf Bello", role: "Project Coordinator", img: "/assets/expert4.jpg" },
  { name: "Dr. Sarah Johnson", role: "Environmental Specialist", img: "/assets/expert5.jpg" },
  { name: "Prof. Michael Lee", role: "Materials Science Expert", img: "/assets/expert6.jpg" },
  { name: "Dr. Emily White", role: "Safety and Compliance", img: "/assets/expert7.jpg" },
  { name: "Engr. David Brown", role: "Process Optimization", img: "/assets/expert8.jpg" },
];

const Expert = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-50 py-24 px-6 w-full md:px-4">
      <h6 className="underline font-bold text-softBlue mb-6 text-center">
        {t("about.title")}
      </h6>

      <SectionHeader title={t("section.experts")} />
      
      <p className="text-sm text-gray-700 max-w-3xl mb-8">
        {t("expert.desc")}
      </p>

      <div className="grid xs:grid-row md:grid-cols-2 lg:grid-cols-4 gap-3">
        {members.map((member, index) => (
          <div
            key={index}
            className="flex items-center bg-white/70 backdrop-blur-sm rounded-md shadow-md w-full p-4"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-14 h-14 object-cover rounded mr-4"
            />
            <div>
              <h4 className="font-semibold text-primary text-xs sm:text-sm md:text-base">
                {member.name}
              </h4>
              <p className="text-[10px] pr-[2px] sm:text-xs md:text-sm text-gray-600">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expert;
