import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Loader = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisitedCSU');

    if (!hasVisited) {
      sessionStorage.setItem('hasVisitedCSU', 'true');
    }

    // Disable scroll
    document.body.classList.add('overflow-hidden');

    // Start fade-out at 3000ms
    const fadeTimer = setTimeout(() => {
      setFadingOut(true);
    }, 3000);

    // Remove loader and re-enable scroll at 6000ms
    const hideTimer = setTimeout(() => {
      setVisible(false);
      document.body.classList.remove('overflow-hidden');
    }, 6000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
      document.body.classList.remove('overflow-hidden'); // Ensure cleanup
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-gradient-to-br from-softBlack/85 to-primary/95 text-white flex items-center justify-center transition-opacity duration-[2000ms] ${
        fadingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center justify-center animate-fade-in">
        <img
          src="/assests/logo.png"
          alt="CSU Loading Logo"
          className="w-60 md:w-80 h-auto object-contain"
        />
        <p className="mt-4 text-lg md:text-2xl text-softWhite font-semibold tracking-wider animate-pulse">
          {t('loader.loading')}
        </p>
      </div>
    </div>
  );
};

export default Loader;
