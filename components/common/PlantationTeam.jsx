import React, { useEffect, useState } from "react";
import ExpertCard from "@/components/ui/ExpertCard";
import { motion } from "framer-motion";

const PlantationTeam = () => {
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
                Array.isArray(member.showAt) && member.showAt.includes("PLANTATION")
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-stretch">
      {teamMembers.map((member, i) => (
        <motion.div
          key={i}
          className="h-full"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          viewport={{ once: true }}
        >
          <ExpertCard {...member} />
        </motion.div>
      ))}
    </div>
  );
};

export default PlantationTeam;
