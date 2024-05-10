import React from "react";

const HomePage4 = () => {
  return (
    <div>
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
          <div className="absolute w-1/2 h-1/2 -bottom-[40%] bg-amber-200 rounded-full"></div>
        </div>

        <div className="w-full h-full flex flex-col lg:flex-row items-center p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-2 lg:space-x-4">
          <div className="w-full h-1/2 lg:h-full lg:w-[40%] text-3xl font-bold">
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
          <div className="w-full h-1/2 lg:h-full lg:w-[60%] gap-2 p-2">
            <div className="w-full h-full">
              <div className="w-full grid grid-cols-2 grid-rows-2 space-y-2 overflow-hidden h-1/2">
                <div className="space-x-2 col-span-2 row-span-1 flex h-">
                  <img
                    id="imagefrompx"
                    className="w-1/2 h-auto"
                    src="/assets/classroom-3.jpg"
                  />
                  <img
                    id="imagefrompx"
                    className="w-1/2"
                    src="/assets/classroom-2.jpg"
                  />
                </div>
                <div className="space-x-2 col-span-2 row-span-1 flex h-64">
                  <img
                    id="imagefrompx"
                    className="w-1/2"
                    src="/assets/playroom-1.jpg"
                  />
                  <img
                    id="imagefrompx"
                    className="w-1/2"
                    src="/assets/slide.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage4;
