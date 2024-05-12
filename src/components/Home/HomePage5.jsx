import React from "react";

const HomePage5 = () => {
  return (
    <>
      <div className="w-full h-screen">
        <div className="w-full h-full">
          <div className="grid grid-cols-2 w-full h-full">
            <div className="relative">
              <div className="py-10">
                <h1 className="bg-blue px-5 font-semibold w-fit text-center text-white text-6xl">
                  LET YOUR CHILD
                </h1>
              </div>

              <div className="px-5 space-y-4">
                <div className="text-xl">
                  <h1 className="font-semibold w-fit text-center text-blue text-6xl">
                    LEARN
                  </h1>
                  <p>
                    problem-solving and life skills through play and activities
                  </p>
                </div>
                <div className="text-xl">
                  <h1 className="font-semibold w-fit text-center text-pink text-6xl">
                    PLAY
                  </h1>
                  <p>
                    indore & outdoor sports like table tennis, <br /> chess,
                    badminton, karate, gymnastic, skating and more.
                  </p>
                </div>
                <div className="text-xl">
                  <h1 className="font-semibold w-fit text-center text-orange-500 text-6xl">
                    EXCEL
                  </h1>
                  <p>as global citizens</p>
                </div>
              </div>

              <div className="py-10 text-gray-700">
                <h1 className="px-5 font-semibold w-fit text-center text-4xl">
                  WITH NEW AGE
                </h1>
                <h1 className="px-5 font-semibold w-fit text-center text-4xl">
                  LEARNING METHODS
                </h1>
              </div>

              <div className="space-y-4">
                <h1 className="bg-blue px-5 font-semibold w-fit text-center text-2xl">
                  ONLY 20 CHILDREN PER CLASS
                </h1>
                <h1 className="bg-green px-5 font-semibold w-fit text-center text-2xl">
                  DEDICATED SCHOOL COUNSELLOR
                </h1>
                <h1 className="bg-orange-500 px-5 font-semibold w-fit text-center text-2xl">
                  STATE-OF-THE ART INFRASTRUCTURE
                </h1>
              </div>

              <div className="absolute bottom-0 right-0 -z-10">
                <img src="/assets/paint girl.png" alt="" />
              </div>
            </div>

            <div>
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-[90%] h-[90%] bg-white flex items-center justify-center">
                  <div className="w-[93%] h-[93%]">
                    <div className="p-10 w-full h-full bg-blue">

                      <div className="w-full justify-center flex">
                        <div className="w-fit text-center">
                          <h1 className="text-5xl text-white font-bold font-[Cardo-Bold]">
                            KAPOL
                          </h1>
                          <p className="text-white text-lg font-semibold font-[Cardo-Bold]">
                            GLOBAL ACADEMY
                          </p>
                          <div className="flex justify-center p-2">
                            <img src="/assets/kg.png" alt="" />
                          </div>
                          <p className="text-white">WORLD OF LEARNING</p>
                          <p className="text-white">& OPPORTUNITIES</p>
                        </div>
                      </div>

                      <div className="w-full justify-center mt-5 flex">
                        <div className="w-fit text-center">
                          <h1 className="text-3xl text-white font-bold font-[Cardo-Bold]">
                            KAPOL
                          </h1>
                          <p className="text-white text-lg font-semibold font-[Cardo-Bold]">
                            GLOBAL ACADEMY
                          </p>
                          <div className="flex justify-center p-2">
                            <img src="/assets/kg.png" alt="" />
                          </div>
                          <p className="text-white">WORLD OF LEARNING</p>
                          <p className="text-white">& OPPORTUNITIES</p>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage5;
