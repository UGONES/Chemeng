import { useTranslation } from "react-i18next";

const SectionHeader = ({ title, subtitle }) => {
  const { t } = useTranslation();

  return (
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-primary">{t(title)}</h2>
      {subtitle && <p className="text-gray-600">{t(subtitle)}</p>}
    </div>
  );
};

export default SectionHeader;
