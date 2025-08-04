import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import SectionHeader from "../compontents/SectionHeader";

const images = [
  { image: "/assests/0111-hd-cheme-study-abroad.jpg" },
  { image: "/assests/221122_ugp_study_guide_ug_rush_079.jpg" },
  { image: "/assests/lr-9125.png" },
  { image: "/assests/trades.jpg" },
  { image: "/assests/enviroment.jpg" },
  { image: "/assests/ACEX,_Callendar_Road.png" },
  { image: "/assests/161021_umang_clemens_chem_eng_065_205784_001.jpg" },
];

const Legal = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Section 1: Legal Overview + Carousel */}
      <section className="bg-gray-100 py-24 px-6 md:px-20">
        <h6 className="underline font-bold text-softBlue mb-6 text-center">
          {t("about.title")}
        </h6>

        <SectionHeader title={t("section.legal")} />

        <p className="text-sm md:text-base text-center text-gray-700 max-w-8xl mb-6">
          {t("legal.desc")}
        </p>

        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          breakpoints={{ 768: { slidesPerView: 3 } }}
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-md rounded-lg p-4 text-center">
                <img
                  src={image.image}
                  alt={`Award ${index}`}
                  className="w-full h-80 object-cover rounded mb-2"
                />
                <p className="text-sm font-medium">{t("legal.award_title")}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Legal;
