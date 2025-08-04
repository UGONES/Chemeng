import { useTranslation } from 'react-i18next';
import SectionHeader from '../../compontents/SectionHeader';

const Training = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/221122_ugp_study_guide_ug_rush_079.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-center">
          <h1 className="text-4xl font-bold">{t("training.hero")}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-6">
        <SectionHeader title={t("training.title")} />
        <p className="text-lg text-gray-700">
          {t("training.desc")}
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {t("training.list", { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Training;
