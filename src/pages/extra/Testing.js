import { useTranslation } from 'react-i18next';
import SectionHeader from '../../compontents/SectionHeader';

const Testing = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/161021_umang_clemens_chem_eng_065_205784_001.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-center">
          <h1 className="text-4xl font-bold">{t("testing.hero")}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-6">
        <SectionHeader title={t("testing.title")} />
        <p className="text-lg text-gray-700">
          {t("testing.desc")}
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {t("testing.list", { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Testing;
