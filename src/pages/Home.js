import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../compontents/SectionHeader';
import { FaUserFriends, FaHistory } from 'react-icons/fa';
import { FiChevronsDown } from "react-icons/fi";

const generateRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

const Home = () => {
  const { t } = useTranslation();

  const stats = {
    years: generateRandom(9, 15),
    clients: generateRandom(280, 350),
    testing: generateRandom(500, 1000),
    consultation: generateRandom(400, 900),
    training: generateRandom(300, 700),
    research: generateRandom(100, 400),
  };

  return (
    <div className="margin-top-0 w-auto">
      {/* Hero Section */}
      <section className="min-h-[100vh] w-full flex items-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/assests/hero-video.mp4"
          autoPlay
          muted
          loop
        />
        <div className="absolute inset-0 bg-gradient-to-br from-softWhite/30 to-black/80 z-10" />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative left-5 text-white max-w-lg z-20"
        >
          <h1 className="text-4xl text-softWhite font-bold">{t("home.heroTitle")}</h1>
          <p className="mt-2 text-lg text-softWhite">{t("home.heroSubtitle")}</p>
          <button className="mt-4 text-lg font-semibold">
            <Link className='mt-4 bg-primary text-softWhite px-6 py-2 rounded-full hover:bg-tealAccent hover:text-primary transition-colors hover:underline' to="/about">
              {t("home.button")}
            </Link>
          </button>
        </motion.div>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center text-white cursor-pointer animate-bounce space-y-1">
            <p className="text-xs tracking-wider hover:text-tealAccent text-white">{t("home.scroll")}</p>
            <FiChevronsDown className="text-white hover:text-tealAccent text-sm mb-0 pd-0" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <SectionHeader title={t("home.services_title")} subtitle={t("home.servicesSubtitle")} />
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: t("home.consulting.title"),
              desc: t("home.consulting.desc"),
              img: '/assests/service1-consluting.jpg',
              link: '/services/consulting',
            },
            {
              title: t("home.testing.title"),
              desc: t("home.testing.desc"),
              img: '/assests/161021_umang_clemens_chem_eng_065_205784_001.jpg',
              link: '/services/testing',
            },
            {
              title: t("home.training.title"),
              desc: t("home.training.desc"),
              img: '/assests/221122_ugp_study_guide_ug_rush_079.jpg',
              link: '/services/training',
            },
          ].map(({ title, desc, img, link }) => (
            <Link
              key={title}
              to={link}
              className="relative rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
            >
              <img src={img} alt={title} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white hover:text-tealAccent">
                <h3 className="text-2xl text-softWhite font-semibold">{title}</h3>
                <p className="text-sm text-white mt-1">{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6 bg-gray-70">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          <div className="lg:w-2/5 w-full">
            <img
              src="/assests/maxresdefault.jpg"
              alt="Achievements"
              className="rounded-xl w-full h-full object-cover shadow-lg"
            />
          </div>

          <div className="lg:w-3/5 w-full space-y-8">
            <SectionHeader title={t("home.achievements.title")} subtitle={t("home.achievements.achievementsSubtitle")} />
            <p className="text-gray-600 text-lg">{t("home.achievements.achievementsDescription")}</p>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow">
                <FaHistory className="text-primary text-xl mr-4" />
                <div>
                  <h6 className="text-xl font-bold text-primary">{stats.years}+ Years</h6>
                  <p className="text-gray-700 text-sm">{t("home.achievements.years")}</p>
                </div>
              </div>
              <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow">
                <FaUserFriends className="text-primary text-xl mr-4" />
                <div>
                  <h6 className="text-xl font-bold text-primary">{stats.clients}+ Customers</h6>
                  <p className="text-gray-700 text-sm">{t("home.achievements.clients")}</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-center text-gray-700 font-semibold mb-4">{t("home.achievements.moreThan")}</p>
              <div className="overflow-x-auto items-center w-full">
                <div className="flex w-max px-4 py-3 bg-softWhite rounded-lg shadow-md">
                  {[
                    { value: stats.testing, label: t("home.achievements.testing") },
                    { value: stats.consultation, label: t("home.achievements.consultation") },
                    { value: stats.training, label: t("home.achievements.training") },
                    { value: stats.research, label: t("home.achievements.research") },
                  ].map(({ value, label }, index) => (
                    <div
                      key={index}
                      className="min-w-[140px] flex-shrink-0 flex flex-col items-center border-l border-r border-gray-300 px-4 first:border-l-0 last:border-r-0"
                    >
                      <div className="text-xl font-bold text-primary">{value}+</div>
                      <div className="text-sm text-gray-700 mt-1 text-center">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
