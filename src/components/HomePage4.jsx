import React, { useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(gsap,useGSAP,ScrollTrigger);

const HomePage4 = () => {
  const page4 = useRef(null);
  useGSAP(
    () => {
      var t1 = gsap.timeline();
      var t2 = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      t1.from("#slideleft", {
        x: 200,
        opacity: 0,
        delay: 1,
        duration: 2,
        scrollTrigger: {
          trigger: "#slideleft",
          start: "top center",
        },
      });
      t2.to(
        "#slidefromright",
        {
          left: 0,
          stagger: 4,
        },
        "pair"
      );
      t2.from(
        "#slidefrombtot",
        {
          y: "-60px",
          stagger: 4,
        },
        "pair"
      );
      t2.to(
        "#slidefrombtot",
        {
          delay: 4,
          y: "52px",
          stagger: 4,
        },
        "pair"
      );
    },
    { scope: page4 }
  );

  return (
    <div ref={page4}>
      <div className="w-full h-auto relative overflow-hidden">
        <div className="absolute w-full h-full -z-10 m-5">
          <div className="absolute -top-[15%] -left-[6%] w-56 h-56 rounded-full bg-yellow flex justify-center items-center">
            <div className="w-1/2 h-1/2 bg-white rounded-full"></div>
          </div>
          <div className="absolute w-52 h-52 rounded-full bg-sky-200 flex justify-center items-center -bottom-2 left-[38%]">
            <div className="w-1/2 h-1/2 bg-white rounded-full"></div>
          </div>
          <div className="absolute w-52 h-52 rounded-full bg-red-300 flex justify-center items-center top-20 left-[30%]">
            <div className="w-1/2 h-1/2 bg-white rounded-full"></div>
          </div>
        </div>

        <div className="w-full h-full flex flex-col lg:flex-row items-center p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-2 lg:space-x-4">
          <div
            id="slideleft"
            className="w-full h-1/2 lg:h-full lg:w-[50%] text-3xl font-bold"
          >
            <div className="grid-flow-col space-y-2 md:space-y-4 md:p-6">
              <div className="space-x-2 font-bold text-xl md:text-2xl xl:text-4xl">
                <h1 className="text-blue">STATE-OF-THE-ART</h1>
                <h1>WORLDCLASS FACILITIES</h1>
              </div>
              <div className="text-sm md:text-lg">
                <p>
                  At Kapol Global Academy (IGCSE), we pride ourselves on
                  providing state-of-the-art facilities that foster academic
                  excellence and holistic development. Within our contemporary
                  classrooms, students benefit from advanced interactive
                  technology and ergonomically designed furniture, cultivating
                  collaborative environments conducive to scholarly achievement.
                </p>
              </div>
              <div className="text-sm md:text-lg">
                <p>
                  Our dance studio serves as a platform for students to explore
                  their creativity and express themselves authentically.
                  Additionally, our library boasts a comprehensive collection of
                  both print and digital resources, encouraging research and
                  nurturing independent inquiry.
                </p>
              </div>
              <div className="text-sm md:text-lg">
                <p>
                  Furthermore, our on-campus sports amenities cater to a diverse
                  range of interests and abilities. Indoors, students may engage
                  in activities such as table tennis, chess, carrom, and
                  badminton, while outdoor pursuits encompass karate, swimming,
                  tennis, gymnastics, and skating. Whether fostering teamwork in
                  collective sports or honing individual skills, our facilities
                  cater to the varied preferences of our students.
                </p>
              </div>
              <div className="text-sm md:text-lg">
                <p>
                  Not the least, our cutting-edge robotics laboratory provides
                  students with immersive experiences in STEM education,
                  fostering curiosity and innovation. Central to our ethos is
                  the safety and well-being of our students, underscored by
                  comprehensive security measures and a nurturing, inclusive
                  school culture that promotes mutual respect and support among
                  all members of our – community
                </p>
              </div>
            </div>
          </div>
          <div
            id="slideleft"
            className="w-full h-1/2 lg:h-screen lg:w-[50%] gap-2 p-2 py-10"
          >
            <div className="w-full h-full">
              <div className="p-2 relative w-full h-2/3 flex overflow-hidden">
                <div
                  id="slidefromright"
                  className="w-full h-full object-cover left-full absolute"
                >
                  <img src="/assets/lab.jpg" />
                </div>
                <div
                  id="slidefromright"
                  className="w-full h-full object-cover left-full absolute"
                >
                  <img className="w-full" src="/assets/dancing.jpg" />
                </div>
                <div
                  id="slidefromright"
                  className="w-full h-full object-cover left-full absolute"
                >
                  <img src="/assets/learning.jpg" />
                </div>
                <div
                  id="slidefromright"
                  className="w-full h-full object-cover left-full absolute"
                >
                  <img src="/assets/learn-creativity.jpg" />
                </div>
                <div
                  id="slidefromright"
                  className="w-full flex items-center h-full left-full absolute"
                >
                  <img
                    className="w-full h-full"
                    h-full
                    src="/assets/sport-2.jpg"
                  />
                </div>
                <div className="px-5 absolute w-2/3 h-14 bg-slate-500 bottom-10 overflow-hidden flex">
                  <h1
                    id="slidefrombtot"
                    className="font-bold text-5xl absolute items-center text-blue"
                  >
                    Lab
                  </h1>
                  <h1
                    id="slidefrombtot"
                    className="font-bold text-5xl absolute items-center text-yellow"
                  >
                    Dancing
                  </h1>
                  <h1
                    id="slidefrombtot"
                    className="font-bold text-5xl absolute items-center text-green"
                  >
                    Creativity Learning
                  </h1>
                  <h1
                    id="slidefrombtot"
                    className="font-bold text-5xl absolute items-center text-pink"
                  >
                    Learning
                  </h1>
                  <h1
                    id="slidefrombtot"
                    className="font-bold text-5xl absolute items-center text-pink"
                  >
                    Sports
                  </h1>
                </div>
              </div>
              <div id="slideleft" className="pt-10">
                <img src="/assets/learn.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage4;
