import { useTranslation } from "react-i18next";
import SectionHeader from "../compontents/SectionHeader";
import { Link } from "react-router-dom";

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-full bg-gray-800 overflow-hidden">
        <video
          className="w-full h-full object-cover opacity-60"
          autoPlay
          muted
          loop
          src="/assests/hero-video.mp4"
        />
      </section>

      <div className="absolute inset-0 flex flex-col items-center text-softWhite justify-center text-center px-4">
        <h2 className="text-3xl font-bold text-softWhite pb-6" >{t("about.heroTitle")} </h2>
      </div>

      <section className="bg-softWhite py-10 px-6 md:px-20 flex gap-8 text-gray-700">
        <h3 className="text-xl md:text-xl text-left ml-2 pr-0 pl-0 font-bold mb-4 gap-8 text-primary">
          {t("about.whoWeAreTitle")}
        </h3>
        <p className="max-w-6xl text-sm md:text-base leading-relaxed right-2">
          {t("about.who_we_are_text")}
        </p>
      </section>

      {/* Discover More Section */}
      <section className="bg-gray-100 py-10 px-6 md:px-20">
        <SectionHeader title={t("about.discover_more")} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {t("about.discover", { returnObjects: true }).map((title, index) => {
            const links = [
              "/about/vision-mission",
              "/about/legals",
              "/about/organization-chart",
              "/about/the-experts"
            ];
            const images = [
              "/assests/lr-9125.png",
              "/assests/ACEX,_Callendar_Road.png",
              "/assests/0111-hd-cheme-study-abroad.jpg",
              "/assests/221122_ugp_study_guide_ug_rush_079.jpg"
            ];

            return (
              <Link
                key={index}
                to={links[index]}
                className="relative h-48 rounded-lg overflow-hidden shadow-md group hover:scale-105 transition-transform hover:ease-in-out"
              >
                <img src={images[index]} alt={title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 z-10" />
                <div className="relative z-20 flex flex-col h-full justify-between p-4">
                  <h4 className="text-white font-bold text-xl">{title}</h4>
                  <p className="text-right text-sm text-white underline group-hover:text-tealAccent transition">
                    {t("about.learn_more")}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default About;
