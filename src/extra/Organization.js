import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SectionHeader from "../compontents/SectionHeader";

const Organization = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Section 2: Org Chart */}
      <section className="bg-white py-24 px-6 md:px-20">
        <h6 className="underline font-bold text-softBlue mb-6 text-center">
          {t("about.who_we_are")}
        </h6>
        <SectionHeader title={t("section.org_chart")} />
        <p className="mb-6 text-sm md:text-base text-gray-700">
          {t("organization.desc")}
        </p>
        <div className="overflow-x-auto">
          <img
            src="/assests/Organization-chart1.jpg"
            alt="Organization Chart"
            className="w-full max-w-4xl mx-auto"
          />
        </div>
      </section>

      {/* Section 3: Our Team */}
      <section className="bg-gray-50 py-10 px-6 md:px-20" id="team">
        <SectionHeader title={t("about.title")} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {[
            {
              name: "Dr. Jane Doe",
              position: t("organization.head_of_dept"),
              description: t("organization.head_of_dept_desc"),
              image: "/assests/medicalandhealth.jpg",
              link: "/about/the-experts",
            },
            {
              name: "Prof. John Smith",
              position: t("organization.senior_lecturer"),
              description: t("organization.senior_lecturer_desc"),
              image: "/assests/business.jpg",
              link: "/about/the-experts",
            },
            {
              name: "Eng. Sarah Johnson",
              position: t("organization.research_coord"),
              description: t("organization.research_coord_desc"),
              image: "/assests/researchsciences.jpg",
              link: "/about/the-experts",
            },
            {
              name: "Dr. Mike Brown",
              position: t("organization.industrial_liaison"),
              description: t("organization.industrial_liaison_desc"),
              image: "/assests/BusinessSalesMarketing.jpg",
              link: "/about/the-experts",
            },
          ].map((member, i) => (
            <Link
              key={i}
              to={member.link}
              className="bg-softwhite flex rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow hover:cursor-pointer"
            >
              <img
                src={member.image}
                alt={`Team Member ${member.name}`}
                className="w-20 h-full object-contain rounded-lg"
              />
              <div className="ml-2">
                <h5 className="text-lg text-softBlue font-semibold">{member.name}</h5>
                <p className="text-sm text-gray-600">{member.position}</p>
                <p className="text-lg pt-8 text-gray-600">{member.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Organization;
