import React, { useEffect, useState } from "react";
import DirectorCard from "@/components/ui/DirectorCard";
import { motion } from "framer-motion";

const DirectorSection = ({ fadeInUp }) => {
  const [teamMembers, setTeamMember] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTeamMebers = async () => {
      try {
        const res = await fetch("/api/team");
        if (!res.ok) throw new Error("faiild to fetch Team Memebers");
        const data = await res.json();
        const filteredMembers = data.filter(
          (member) =>
            Array.isArray(member.showAt) && member.showAt.includes("GROUP")
        );

        setTeamMember(filteredMembers);
      } catch (error) {
        console.error("error at team members",error);
        setError(true);
      }
    };

    fetchTeamMebers();
  },[]);

  return (
    <section className="min-h-screen w-[90vw] flex flex-col items-center mx-auto py-12 px-6">
      <motion.h1
        className="text-green-700 text-3xl sm:text-4xl font-bold mb-10 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        Guided by Visionaries
      </motion.h1>

      <div className="flex flex-col gap-10 items-center">
        {teamMembers && teamMembers.map((data, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={i}
            className="w-full"
          >
            <DirectorCard
              name={data.name}
              title={data.title}
              imageUrl={data.imageUrl}
              bio={data.bio}
              index={i}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DirectorSection;
