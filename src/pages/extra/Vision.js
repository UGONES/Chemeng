import { useTranslation } from "react-i18next";
import SectionHeader from "../../compontents/SectionHeader";

const Vision = () => {
  const { t } = useTranslation();

  return (
    <section className="r bg-softWhite py-24 px-4 md:px-10 text-gray-700">
      <h6 className="underline font-bold text-softBlue mb-6 text-center">
        {t("about.title")}
      </h6>

      <SectionHeader title={t("vision.title")} />

      <div className="flex flex-col lg:flex-row gap-6 items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">{t("vision.our_vision")}</h3>
          <p className="mb-6 text-sm leading-relaxed">
            {t("vision.our_vision_desc")}
          </p>

          <h3 className="text-xl font-semibold mb-2">{t("vision.our_mission")}</h3>
          <p className="text-sm leading-relaxed">
            {t("vision.our_mission_desc")}
          </p>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="relative flex flex-col sm:flex-row sm:space-x-6 items-center sm:items-start max-w-full overflow-hidden">
            <img
              src="/assests/221122_ugp_study_guide_ug_rush_079.jpg"
              alt="Vision"
              className="object-cover rounded-lg shadow-lg h-80 w-full sm:w-2/3"
            />
            <img
              src="/assests/lr-9125.png"
              alt="Mission"
              className="rounded-lg object-cover border-4 border-white shadow-lg h-80 w-full sm:w-2/3 sm:absolute sm:bottom-[-60px] sm:right-[-100px] sm:z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
