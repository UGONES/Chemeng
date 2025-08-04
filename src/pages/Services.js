import { useTranslation } from "react-i18next";
import SectionHeader from "./../compontents/SectionHeader";
import ServiceCarousel from "../compontents/servicesCarosuel";
import { Link } from "react-router-dom";

const Services = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 p-4 bg-softWhite">
      <SectionHeader title={t("services.title")} />

      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <p className="text-gray-600 text-base mb-2">
            {t("services.intro")}
          </p>
          <p className="text-gray-600 text-base mb-6">
            {t("services.details")}
          </p>

          {/* Buttons */}
          <div className="flex self-center pb-4 gap-4">
            <Link to="/services/testing">
              <button className="bg-softBlue text-white px-5 py-2 rounded hover:bg-primary transition">
                {t("services.testingButton")}
              </button>
            </Link>

            <div className="mt-4 justify-center items-center">
              <Link
                to="/experiences"
                className="text-primary underline hover:text-softBlue transition"
              >
                {t("services.experienceLink")}
              </Link>
            </div>
          </div>

          {/* Carousel */}
          <ServiceCarousel />
        </div>
      </div>
    </section>
  );
};

export default Services;
