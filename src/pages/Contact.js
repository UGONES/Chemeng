import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-24 px-4 flex items-center justify-center"
      style={{
        backgroundImage: "url('/assets/BusinessSalesMarketing.jpg')",
        backgroundBlendMode: 'overlay',
        backgroundColor: '#00133ca6'
      }}
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 text-white bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/20">
        {/* Form Section */}
        <form className="space-y-6">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t("contact.get_in_touch")}
          </h2>
          <input
            type="text"
            name="name"
            autoComplete="name"
            placeholder={t("contact.name")}
            className="w-full p-3 rounded-md bg-white/20 border border-white/30 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder={t("contact.email")}
            className="w-full p-3 rounded-md bg-white/20 border border-white/30 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <textarea
            placeholder={t("contact.message")}
            name="message"
            rows="5"
            className="w-full p-3 rounded-md bg-white/20 border border-white/30 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-primary"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-primary hover:bg-tealAccent transition-colors px-6 py-3 rounded-md font-semibold text-white w-full"
          >
            {t("contact.send")}
          </button>
        </form>

        {/* Map Section */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Office Location"
            className="w-full h-full min-h-[350px] rounded-lg"
            src="https://www.google.com/maps/embed?pb=!" // Replace with actual coordinates
            loading="lazy"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
