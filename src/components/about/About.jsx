import React from "react";
import aboutAnimation from "../lottieFiles/aboutAnim.json";
import Lottie from "lottie-react";
import { techSkills } from "./Skills";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { textVariants, skillsVariants } from "../motionVariants/motionVariants";
import SkillSection from "./SkillSection";

function About() {
  return (
    <>
      <div className="flex flex-col justify-between bg-gradient-to-b from-bgDark to-bgDarkMute p-8 md:p-16 text-content">
        <h1 className="font-medium text-4xl text-center md:text-6xl">
          Know Who{" "}
          <span className="font-carattere font-semibold text-4xl text-contentHighlight md:text-7xl tracking-widest">
            We're
          </span>
        </h1>
        <div className="flex md:flex-row flex-col-reverse justify-between pt-4 sm:pt-0">
          <Lottie className="md:w-1/3" animationData={aboutAnimation} />
          <motion.div
            className="flex flex-col justify-center gap-7 md:w-1/2 text-justify"
            variants={textVariants}
            initial="initial"
            whileInView="animate"
          >
            <motion.p className="text-xl md:text-2xl" variants={textVariants}>
              Hello Everyone {" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋
              </span>
              {" "}
              We're {" "}
              <span className="font-carattere font-semibold text-3xl text-contentHighlight tracking-widest">
              Code Scalars
              </span>
              
              , a technology-focused team based in 

              {" "}
              <span className="font-carattere font-semibold text-3xl text-contentHighlight tracking-widest">
              Chandigarh, India
              </span>
              
              . Our team is passionate about building digital experiences that blend innovation with practicality. We have a diverse set of skills and a deep commitment to creating software solutions that not only meet current demands but also anticipate future needs.
            </motion.p>
            <motion.p className="text-xl md:text-2xl" variants={textVariants}>
            Our mission is to leverage our collective skills and knowledge to design and develop cutting-edge web applications. We specialize in creating engaging user experiences while keeping up with the latest web technology trends. We thrive in collaborative environments where we can use our expertise in 
            
            front-end and back-end development
            
            , along with skills in 
            { " " }
            <span className="font-semibold text-2xl text-contentHighlight tracking-widest">
              AI Integration
            </span>
            
            , 
            
            {" "}
            <span className="font-semibold text-2xl text-contentHighlight tracking-widest">
            Mobile Application
            </span>
            
            , 
            
            {" "}
            <span className="font-semibold text-2xl text-contentHighlight tracking-widest">
              Cross-platform Application
            </span>
            
            , and 
            {" "}
            <span className="font-semibold text-2xl text-contentHighlight tracking-widest">
            DevOps
            </span>
            
            , to build scalable and user-friendly web solutions. We're excited to partner with like-minded individuals and organizations to bring innovative ideas to life.
            </motion.p>
          </motion.div>
        </div>

        {/* <div className="flex flex-col gap-8 md:gap-12 pt-4 md:pt-16">
          <motion.h1
            className="font-medium text-3xl text-center md:text-6xl"
            variants={textVariants}
            initial="initial"
            whileInView="animate"
          >
            Educational {" "}
            <span className="font-carattere font-semibold text-4xl text-contentHighlight md:text-7xl tracking-widest">
              Journey
            </span>
          </motion.h1>

          <SkillSection
            heading="Languages I Use"
            skills={techSkills.filter((skill) => skill.type === "Languages")}
          />
          <SkillSection
            heading="Frontend Skills"
            skills={techSkills.filter((skill) => skill.type === "Frontend")}
          />
          <SkillSection
            heading="Backend Skills"
            skills={techSkills.filter((skill) => skill.type === "Backend")}
          />
          <SkillSection
            heading="Tools I Use"
            skills={techSkills.filter((skill) => skill.type === "Tools")}
          />
        </div> */}
        {/* Professional Skills */}
        <div className="flex flex-col gap-8 md:gap-12 pt-4 md:pt-16">
          <motion.h1
            className="font-medium text-3xl text-center md:text-6xl"
            variants={textVariants}
            initial="initial"
            whileInView="animate"
          >
            Professional{" "}
            <span className="font-carattere font-semibold text-4xl text-contentHighlight md:text-7xl tracking-widest">
              Skills
            </span>
          </motion.h1>

          <SkillSection
            heading="Languages I Use"
            skills={techSkills.filter((skill) => skill.type === "Languages")}
          />
          <SkillSection
            heading="Frontend Skills"
            skills={techSkills.filter((skill) => skill.type === "Frontend")}
          />
          <SkillSection
            heading="Backend Skills"
            skills={techSkills.filter((skill) => skill.type === "Backend")}
          />
          <SkillSection
            heading="Tools I Use"
            skills={techSkills.filter((skill) => skill.type === "Tools")}
          />
        </div>
      </div>
      <Helmet>
        <title>Piyush | About</title>
      </Helmet>
    </>
  );
}

export default About;

