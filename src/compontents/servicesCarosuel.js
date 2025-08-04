import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const ServiceCarousel = () => {
  const { t } = useTranslation();

  const serviceImages = [
    "/assests/0111-hd-cheme-study-abroad.jpg",
    "/assests/161021_umang_clemens_chem_eng_065_205784_001.jpg",
    "/assests/221122_ugp_study_guide_ug_rush_079.jpg",
    "/assests/ACEX,_Callendar_Road.png",
    "/assests/art-performing.jpg",
    "/assests/BusinessSalesMarketing.jpg",
    "/assests/researchsciences.jpg",
  ];

  return (
    <div className="w-full md:w-1/2">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2500 }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className} swiper-pagination-bullet-custom"></span>`,
        }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
      >
        {serviceImages.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="rounded-xl overflow-hidden shadow-lg h-80 w-full">
              <img
                src={img}
                alt={`${t("servicesCarousel.altText")} ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>
        {`
          .swiper-pagination {
            position: relative;
            margin-top: 1.5rem;
            display: flex;
            justify-content: center;
            gap: 8px;
          }

          .swiper-pagination-bullet-custom {
            width: 10px;
            height: 10px;
            background: #999;
            opacity: 0.5;
            border-radius: 50%;
            transition: all 0.3s ease;
          }

          .swiper-pagination-bullet-custom.swiper-pagination-bullet-active {
            width: 14px;
            height: 14px;
            background: #007b8a;
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
};

export default ServiceCarousel;
