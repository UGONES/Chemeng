import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGlobe, FaChevronDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import MobileSidebar from "./MobileSidebar";

const Header = () => {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const langDropdownRef = useRef(null); // ✅ Fix: declare ref

  const languages = [
    { code: "ar", label: "العربية", flag: "🇸🇦" },
    { code: "du", label: "Deutsch", flag: "🇩🇪" },
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "en", label: "English", flag: "EN" },
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "zh-CN", label: "中文", flag: "🇨🇳" },
    { code: "ru", label: "Русский", flag: "🇷🇺" },
    { code: "pt", label: "Português", flag: "🇵🇹" },
    { code: "hi", label: "हिन्दी", flag: "🇮🇳" },
    { code: "ja", label: "日本語", flag: "🇯🇵" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleClickOutside = (e) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target)) {
        setLangDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const navItems = [
    { label: t("nav.home"), path: "/" },
    { label: t("nav.about"), path: "/about" },
    { label: t("nav.experiences"), path: "/experiences" },
  ];

  return (
    <header>
      <div
        className={`fixed w-full top-0 z-50 px-4 md:px-10 py-4 shadow text-softBlue transition-colors duration-1000 ${scrolled ? "bg-white/40 backdrop-blur-lg" : "bg-transparent"
          }`}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to="/">
              <img src="/assests/logo.png" alt="CSU Logo" className="w-10 h-10 object-contain" />
            </Link>
          </div>

          {/* Center Nav */}
          <div className="flex flex-col items-center text-softBlue text-center flex-1">
            <div className="text-lg text-xs font-semibold mb-1">
              <Link to="/" className="text-softBlue">
                <h6>{t("header.department")}</h6>
              </Link>
            </div>

            <nav className="hidden md:flex space-x-6 text-xl relative items-center">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`hover:underline hover:text-tealAccent text-softBlue ${pathname === item.path ? "font-bold underline" : ""
                    }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Services Dropdown */}
              <div className="flex items-center relative">
                <Link
                  to="/services"
                  className={`hover:underline hover:text-tealAccent text-softBlue ${pathname === "/services" ? "font-bold underline" : ""
                    }`}
                >
                  {t("nav.services")}
                </Link>
                <button
                  onClick={() => setShowDropdown((prev) => !prev)}
                  className="ml-1 focus:outline-none"
                >
                  <FaChevronDown
                    className={`text-sm transition-transform hover:text-tealAccent ${showDropdown ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {showDropdown && (
                  <div className="absolute left-0 top-8 w-60 bg-gray-300 text-black rounded-lg shadow-md z-50">
                    <Link
                      to="/services/consulting"
                      onClick={() => setShowDropdown(false)}
                      className="block text-softBlue px-4 py-2 hover:text-tealAccent hover:underline hover:bg-gray-100"
                    >
                      {t("nav.consulting")}
                    </Link>
                    <Link
                      to="/services/training"
                      onClick={() => setShowDropdown(false)}
                      className="block text-softBlue px-4 py-2 hover:text-tealAccent hover:underline hover:bg-gray-100"
                    >
                      {t("nav.training")}
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-end gap-4">
            <div className="flex items-center gap-1 md:gap-2 text-sm md:text-base">
              <img
                src="/assests/R9.jpg"
                alt="ISO Certified"
                className="w-8 h-8 object-contain"
              />

              {/* Language Dropdown */}
              <div className="relative" ref={langDropdownRef}>
                <button
                  className="flex items-center gap-1 px-4 py-1 hover:opacity-90 hover:text-tealAccent text-sm"
                  onClick={() => setLangDropdownOpen((prev) => !prev)}
                >
                  <FaGlobe className="hover:text-tealAccent" />
                  <span className="hidden sm:inline uppercase">
                    {languages.find((l) => l.code === i18n.language)?.flag || "🌐"}
                  </span>
                </button>

                {langDropdownOpen && (
                  <ul className="absolute right-0 mt-2 w-36 bg-gray-300 rounded shadow-lg z-50 text-left border border-gray-200">
                    {languages.map((lang) => (
                      <li key={lang.code}>
                        <button
                          onClick={() => {
                            i18n.changeLanguage(lang.code);
                            setLangDropdownOpen(false);
                          }}
                          className={`flex items-center w-full px-4 py-2 text-sm hover:text-tealAccent hover:bg-gray-100 ${i18n.language === lang.code ? "font-bold text-primary" : ""
                            }`}
                        >
                          <span className="mr-2">{lang.flag}</span>
                          {lang.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Mobile Toggle */}
            <div className="block md:hidden">
              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                className="text-primary hover:text-tealAccent text-3xl"
              >
                {menuOpen ? <FiX className="text-redAccent" /> : <FiMenu />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <MobileSidebar open={menuOpen} setOpen={setMenuOpen} />
    </header>
  );
};

export default Header;
