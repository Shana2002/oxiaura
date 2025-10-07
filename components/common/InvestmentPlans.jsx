import Image from "next/image";
import Link from "next/link";
import React from "react";

const PlanCard = ({
  title,
  icon,
  investmentType,
  returnDuration,
  keyBenefits,
}) => (
  <div className="bg-white border-2 border-green-200 rounded-2xl shadow-sm flex flex-col justify-between h-full px-8 py-10">
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-green-700 text-7xl font-bold mb-2">{title}</h2>

        <Image
          src={icon}
          alt="Plant Icon"
          width={96} // 24 * 4 (Tailwind spacing scale)
          height={96}
          className="object-cover"
        />
      </div>

      <p className="text-gray-700 text-xl mt-6">
        <strong>Investment Type:</strong> {investmentType}
      </p>
      <p className="text-gray-700 text-xl">
        <strong>Return Duration:</strong> {returnDuration}
      </p>
      <h3 className="text-green-700 font-semibold mt-6 text-2xl">Key benefits</h3>
      <ul className="list-disc pl-5">
        {keyBenefits.map((benefit, index) => (
          <li key={index} className="text-gray-600 mt-2">
            {benefit}
          </li>
        ))}
      </ul>
    </div>

    {/* Download Button */}
    <div className="mt-4 lg:-mt-10 flex justify-end">
      <Link
        href="/sample-agreement.pdf" // Replace with your actual file path
        download
        className="bg-black text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-green-700 transition"
      >
        Download Sample Agreement
      </Link>
    </div>
  </div>
);

const InvestmentPlans = () => {
  const plans = [
    {
      title: "Supreme Plus Plan",
      investmentType: "Monthly Contribution (4 Years)",
      returnDuration: "After 8 Years",
      icon: "/images/icons/sp.png",
      keyBenefits: [
        "Customers invest monthly for 4 years.",
        "Land ownership is provided via a deed - plantation is done on Oxiura's own plantation land.",
      ],
    },
    {
      title: "Monthly Wealth Plan",
      investmentType: "One-Time Payment",
      returnDuration:
        "Monthly payouts for 60 months + Final maturity in 8 years",
        icon: "/images/icons/mw.png",
      keyBenefits: [
        "Investors make a lump sum payment.",
        "Receive monthly returns for 60 months (5 years).",
        "After 8 years, receive full maturity return.",
        "Plantation is managed on Oxiura land, and land deed is provided.",
      ],
    },
    {
      title: "Golden Crop Plan",
      investmentType: "Customer's Own Bare Land",
      returnDuration: "Based on crop cycle",
      icon: "/images/icons/rp.png",
      keyBenefits: [
        "Ideal for customers with unused land.",
        "Oxiura prepares the land and manages full plantation operations.",
        "Profits shared as per agreement.",
        "No need to buy land - use your own for plantation income.",
      ],
    },
    {
      title: "Royal Plus Plan",
      investmentType: "Interest-based Return Plan",
      returnDuration: "Short-Term",
      icon: "/images/icons/rp.png",
      keyBenefits: [
        "Suitable for short-term investors.",
        "Investors receive interest returns on their capital.",
        "Returns are generated through fast-growing crops managed by Oxiura.",
        "Flexible and low-risk option for stable earnings.",
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 min-h-screen m-[5vw] rounded-4xl bg-green-50 p-10">
      {plans.map((plan, index) => (
        <PlanCard key={index} {...plan} />
      ))}
    </div>
  );
};

export default InvestmentPlans;
