import React from "react";
import avtarAnimation from "../lottieFiles/avtarAnim.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { textVariants } from "../motionVariants/motionVariants";
import SkillSection from "../about/SkillSection";
import { techSkills } from "../about/Skills";
import { FaFileAlt, FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";

function Intro() {
  return (
    // Used in Home page
    <>
      <div className="flex flex-col justify-between items-center bg-gradient-to-b from-bgDarkMute to-bgDark p-8 text-content">
        <h1 className="font-medium text-3xl text-center sm:text-4xl md:text-6xl">
          LET US{" "}
          <span className="font-carattere font-semibold text-4xl text-contentHighlight md:text-7xl tracking-widest">
            introduce
          </span>{" "}
          OURSELF
        </h1>

        <motion.div
          className="flex lg:flex-row flex-col-reverse justify-center items-center"
          variants={textVariants}
          initial="initial"
          whileInView="animate"
        >
          <Lottie className="w-4/5 lg:w-2/5" animationData={avtarAnimation} />
          <div className="flex flex-col justify-center gap-7 pt-8 lg:pb-8 md:w-4/5 lg:w-1/2 text-justify text-lg md:text-xl">
            <motion.p variants={textVariants}>
              Hey there!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋
              </span>{" "}
              I'm{" "}
              <span className="font-carattere font-semibold text-2xl text-contentHighlight tracking-widest">
                Code Scalars
              </span>
              , a team of seasoned software developers from Banglore. 💻 By day, we're dedicated professionals at the forefront of technology, and by night, we collaborate to develop innovative solutions across various platforms.
            </motion.p>

            {/* <span className="font-medium text-contentHighlight">
                React.js, Next.js, Redux and TailwindCSS{" "}
              </span>{" "} */}

            <motion.p variants={textVariants}>
              Our team is skilled in a diverse range of technologies. We specialize in 
              {" "}
              <span className="font-medium text-contentHighlight whitespace-nowrap">
                AI integration
              </span>
              , creating intelligent systems that enhance user experiences. We excel in 

              {" "}
              <span className="font-medium text-contentHighlight whitespace-nowrap">
                Full-stack development
              </span>
              , building end-to-end solutions for web applications. Our expertise extends to 
              {" "}
              <span className="font-medium text-contentHighlight whitespace-nowrap">
              Mobile development
              </span>
              , with proficiency in both 
              {" "}
              <span className="font-medium text-contentHighlight whitespace-nowrap">
              Android
              </span>
              {" "}
               and 
               {" "}
              <span className="font-medium text-contentHighlight whitespace-nowrap">
              iOS platforms
              </span>
               , as well as cross-platform frameworks that enable seamless deployment across multiple devices.
            </motion.p>
            <motion.p variants={textVariants}>
              Our expertise extends to 
              {" "}
              <span className="font-medium text-contentHighlight whitespace-nowrap">
              DevOps &nbsp;
              </span>
              for efficient deployment and robust system maintenance. As a team, we have a iverse skill set and a passion for solving complex problems, always striving to go beyond expectations.
            </motion.p>
            {/* <div className="flex justify-center">
              <Link
                to={'/resume'}
                className="flex items-center gap-2 bg-buttonMain hover:bg-buttonHover shadow-md hover:shadow-buttonMain px-6 p-2 rounded-lg font-semibold text-center sm:tracking-widest transition hover:-translate-y duration-500 delay-150 ease-in-out hover:scale-110"
              >
                <FaFileAlt />Check Out My CV
              </Link>
            </div> */}

          </div>
        </motion.div>

      </div>

      <div className="flex flex-col gap-8 md:gap-12 bg-gradient-to-b from-bgDark to-bgDarkMute px-4 md:px-16 pb-8 text-content">
        <motion.h1
          className="font-medium text-3xl text-center md:text-6xl"
          variants={textVariants}
          initial="initial"
          whileInView="animate"
        >
          Area of {" "}
          <span className="font-carattere font-semibold text-4xl text-contentHighlight md:text-7xl tracking-widest">
            Expertise
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
        <div className="flex justify-center">
          <Link
            to={'/projects'}
            className="flex items-center gap-2 bg-buttonMain hover:bg-buttonHover shadow-md hover:shadow-buttonMain px-6 p-2 rounded-lg font-semibold text-center sm:tracking-widest transition hover:-translate-y duration-500 delay-150 ease-in-out hover:scale-110"
          >
            <FaLaptopCode />Take a Look at My Projects
          </Link>
        </div>
      </div>
    </>
  );
}

export default Intro;
