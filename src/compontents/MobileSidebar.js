import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const MobileSidebar = ({ open, setOpen }) => {
  const { t } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  const { pathname } = useLocation();

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.experiences"), path: "/experiences" },
  ];

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed inset-0 top-0 pt-24 h-full w-64 bg-gray-300 text-softBlue z-40 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className=" flex flex-col space-y-4 text-lg font-semibold">
          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`hover:underline w-full px-4 py-2 text-softBlue hover:text-tealAccent hover:underline hover:bg-gray-100 ${
                pathname === item.path ? "font-bold underline" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div className="flex items-center justify-between">
            <Link
              to="/services"
              onClick={() => setOpen(false)}
              className={`hover:underline w-full px-4 py-2 text-softBlue hover:text-tealAccent hover:underline hover:bg-gray-100 ${
                pathname === "/services" ? "font-bold underline" : ""
              }`}
            >
              {t("nav.services")}
            </Link>

            <button
              onClick={() => setShowDropdown((prev) => !prev)}
              className="ml-2w-full px-4 py-2  focus:outline-none"
            >
              <FaChevronDown
                className={`text-sm hover:text-tealAccent transition-transform ${
                  showDropdown ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {showDropdown && (
            <div className="m mt-2 flex flex-col gap-1 text-base text-softBlue">
              <Link
                to="/services/consulting"
                onClick={() => setOpen(false)}
                className="hover:underline text-softBlue hover:text-tealAccent hover:bg-gray-100 w-full px-4 py-2 "
              >
                {t("nav.consulting")}
              </Link>
              <Link
                to="/services/training"
                onClick={() => setOpen(false)}
                className="hover:underline text-softBlue hover:text-tealAccent hover:bg-gray-100 w-full px-4 py-2 "
              >
                {t("nav.training")}
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-30"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default MobileSidebar;
