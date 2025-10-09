"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import DirectorCard from "@/components/ui/DirectorCard";
import GetInTouch from "@/components/common/GetInTouch";
import Footer from "@/components/common/Footer";
import GroupBackground from "@/assets/images/bg/group_bg.jpg";
import GroupLogoWhite from "@/assets/images/logo/logo_group_white.png";
import { VisionMissionCard } from "@/components/ui/Cards";
import PillarsGrid from "@/components/common/PillarsGrid";
import { teamMembers } from "@/assets/data.js";
import GroupNavbar from "@/components/common/GroupNavbar";


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const page = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Nav Bar */}
      <GroupNavbar />
      {/* Hero Screen */}
      <section className="h-screen flex flex-col items-center justify-center relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={GroupBackground}
            alt="oxiaura-group-background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Gradient Overlay */}
        <div className="absolute bottom-0 w-screen h-[60vh] bg-gradient-to-b from-[rgba(113,224,66,0)] to-[#0E8940]"></div>

        {/* Foreground Content */}
        <motion.div
          className="relative text-center text-white flex flex-col gap-5 px-4"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <Image
            src={GroupLogoWhite}
            alt="oxiaura-group-white"
            className="hidden mx-auto mb-4 w-1/3 sm:w-1/4 md:w-1/6"
          />
          <h3 className="text-3xl sm:text-5xl lg:text-6xl">Welcome to</h3>
          <h1 className="text-5xl sm:text-7xl lg:text-[15vh] font-bold">
            OXIAURA
          </h1>
          <h2 className="text-2xl sm:text-4xl lg:text-6xl">
            Group
          </h2>
        </motion.div>
      </section>

      {/* About Screen */}
      <section className="min-h-screen bg-[#0E8940] flex flex-col gap-10 items-center py-12 px-6 text-white text-center">
        <motion.h4
          className="text-2xl sm:text-3xl font-bold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Beyond Business. Towards a Better Tomorrow.
        </motion.h4>
        <motion.p
          className="max-w-4xl text-lg sm:text-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={2}
        >
          Oxiaura Group of Companies is a forward-thinking conglomerate
          committed to innovation, sustainability, and excellence across diverse
          industries. With a vision to create lasting value, we empower growth,
          nurture partnerships, and shape a better future for businesses and
          communities alike.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={3}
        >
          <VisionMissionCard
            title={"Our Vision"}
            desc={"To be the most trusted and valued brand in Sri Lanka"}
          />
          <VisionMissionCard
            title={"Our Mission"}
            desc={"Empower all Sri Lankans financially and ethically strong"}
          />
        </motion.div>
      </section>

      {/* Companies Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <PillarsGrid />
      </motion.div>

      {/* Director Section */}
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
          {teamMembers.map((data, i) => (
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

      {/* Get in touch */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <GetInTouch />
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default page;
