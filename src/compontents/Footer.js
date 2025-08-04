import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from "react-i18next";

const Footer = () => {
  const year = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-softBlack text-softWhite w-full py-6 px-4 text-xs z-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Section 1: Logo and Tagline */}
        <div className="flex flex-col items-start space-y-2">
          <Link to="/" className="hover:text-softWhite">
            <img src="/assests/logo.png" alt="CSU Logo" className="w-10 h-10 object-contain" />
            <h4 className="font-semibold text-sm hover:text-softWhite">
              CSU Chemical Eng.
            </h4>
          </Link>

          <p className="text-gray-400 text-xs leading-snug">
            {t("footer.tagline")}
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">{t("footer.quick_links")}</h4>
          <ul className="space-y-1 text-gray-300">
            <li><Link to="/" className="hover:underline">{t("nav.home")}</Link></li>
            <li><Link to="/about" className="hover:underline">{t("nav.about")}</Link></li>
            <li><Link to="/services" className="hover:underline">{t("nav.services")}</Link></li>
            <li><Link to="/experiences" className="hover:underline">{t("nav.experiences")}</Link></li>
            <li><Link to="/contact" className="hover:underline">{t("nav.contact")}</Link></li>
          </ul>
        </div>

        {/* Section 3: Office Location and Email */}
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-1">{t("footer.office")}</h4>
            <a
              href="https://maps.google.com/?q=12+Engineering+Road,+CSU,+Nigeria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:underline leading-snug block"
            >
              12 Engineering Road<br />Campus Drive, CSU
            </a>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-1">{t("footer.email")}</h4>
            <a
              href="mailto:chemicaleng@csu.edu.ng"
              className="flex items-center gap-1 hover:underline text-gray-300"
            >
              <FaEnvelope className="text-sm" /> chemicaleng@csu.edu.ng
            </a>
          </div>
          <div>
            <h4 className="font-semibold text-sm">{t("footer.follow")}</h4>
            <div className="flex space-x-3 text-sm">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary"><FaInstagram /></a>
            </div>
          </div>
        </div>

        {/* Section 4: Contacts & Services */}
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm">{t("footer.consulting")}</h4>
            <p className="text-gray-300">+234 801 234 5678</p>
            <p className="text-gray-300">+234 809 876 5432</p>
            <h4 className="font-semibold text-sm mt-2">{t("footer.testing")}</h4>
            <p className="text-gray-300">+234 701 456 7890</p>
            <p className="text-gray-300">+234 708 987 6543</p>
          </div>
        </div>
      </div>

      {/* Divider & Copyright */}
      <hr className="my-4 border-gray-600" />
      <div className="text-center text-gray-500 text-[11px] text-softBlack-500">
        {year} &copy; {t("footer.rights")}
      </div>
    </footer >
  );
};

export default Footer;