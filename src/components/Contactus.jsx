import React from "react";

const Contactus = () => {
  return (
    <div>
      <div className="relative mx-auto h-auto max-w-7xl">
        <div>
          <div className="w-full h-full absolute -z-10 bg-white overflow-hidden">
            <div className="absolute w-52 h-52 bg-lime-200 rounded-full -top-10 -left-10"></div>
            <div className="absolute w-52 h-52 bg-lime-200 rounded-full -right-10 -top-10"></div>
            <div className="absolute w-[43%] h-2/3 bg-lime-200 rounded-xl top-20 left-[3%]"></div>
          </div>
          <div className="absolute w-52 h-52 -z-10 bg-white rounded-full left-[34%] top-0"></div>
        </div>

        <div className="p-5 z-50">
          <span className="space-x-5 font-bold text-sky-900 text-5xl flex items-center font-[Cardo-Bold]">
            KAPOL GLOBAL ACADEMY
            <p className="font-medium text-sm md:text-md lg:text-4xl">
              (IGCSE)
            </p>
          </span>
          <h1 className="text-3xl">(our sister concern school)</h1>
        </div>

        <div className="relative mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-8xl py-12 md:py-24">
            <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
              {/* contact from */}
              <div className="flex items-center justify-center">
                <div className="px-2 md:px-12">
                  <p className="text-2xl font-bold text-blue md:text-4xl">
                    Get in touch
                  </p>
                  <p className="mt-4 text-lg text-gray-600">
                    Our friendly team would love to hear from you.
                  </p>
                  <form action="" className="mt-8 space-y-4">
                    <div className="grid gap-y-4">
                      <h3 className="font-bold">
                        Please fill in the following details to help us assist
                        you better
                      </h3>
                      {/* Child Name */}
                      <div className="grid w-full items-center gap-1.5">
                        <label
                          className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          htmlFor="child_name"
                        >
                          Child's Name
                        </label>
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700  dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900"
                          type="text"
                          id="child_name"
                          placeholder="Child's Name"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Date of Birth */}
                        <div className="grid w-full items-center gap-1.5">
                          <label
                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="date_of_birth"
                          >
                            Date of Birth
                          </label>
                          <input
                            className="flex h-10 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700  dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900"
                            type="date"
                            id="date_of_birth"
                          />
                        </div>
                        <div className="grid w-full items-center gap-1.5">
                          <label
                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="age"
                          >
                            Age
                          </label>
                          <input
                            className="flex h-10 w-24 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700  dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900"
                            type="number"
                            id="age"
                            placeholder="Age"
                          />
                        </div>
                        {/* Gender */}
                        <div className="grid w-full items-center gap-1.5">
                          <label
                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="gender"
                          >
                            Gender
                          </label>
                          <div className="flex items-center space-x-4">
                            <input
                              className="h-4 w-4 text-blue-600 focus:ring-blue-600 border-gray-300 rounded"
                              type="checkbox"
                              id="male"
                            />
                            <label htmlFor="male" className="text-sm">
                              Male
                            </label>
                            <input
                              className="h-4 w-4 text-blue-600 focus:ring-blue-600 border-gray-300 rounded"
                              type="checkbox"
                              id="female"
                            />
                            <label htmlFor="female" className="text-sm">
                              Female
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid w-full items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="grade"
                      >
                        Seeking Admission in Grade
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700  dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="grade"
                        placeholder="Seeking Admission in Grade"
                      />
                    </div>

                    <div className="grid w-full items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="current_school"
                      >
                        Current School (if applicable)
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700  dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="current_school"
                        placeholder="Current School"
                      />
                    </div>

                    <div className="grid w-full items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="father_name"
                      >
                        Father's Name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700  dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="father_name"
                        placeholder="Father's Name"
                      />
                    </div>

                    <div className="grid w-full items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="father_mobile"
                      >
                        Father's Mobile Number
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700  dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900"
                        type="tel"
                        id="father_mobile"
                        placeholder="Father's Mobile Number"
                      />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="father_email"
                      >
                        Father's Email
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700  dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900"
                        type="email"
                        id="father_email"
                        placeholder="Father's Email"
                      />
                    </div>

                    <div className="grid w-full items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="mother_name"
                      >
                        Mother's Name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700  dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="mother_name"
                        placeholder="Mother's Name"
                      />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="mother_mobile"
                      >
                        Mother's Mobile Number
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700  dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900"
                        type="tel"
                        id="mother_mobile"
                        placeholder="Mother's Mobile Number"
                      />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="mother_email"
                      >
                        Mother's Email
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700  dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900"
                        type="email"
                        id="mother_email"
                        placeholder="Mother's Email"
                      />
                    </div>

                    <div className="grid w-full items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="residence_address"
                      >
                        Address (Residence)
                      </label>
                      <textarea
                        className="flex h-24 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700  dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900"
                        id="residence_address"
                        placeholder="Enter your residence address"
                      />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                      <label className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        How did you hear about Kapol Global Academy?
                      </label>
                      <div className="flex items-center space-x-4">
                        <input
                          className="h-4 w-4 text-blue-600 focus:ring-blue-600 border-gray-300 rounded"
                          type="checkbox"
                          id="newspaper"
                        />
                        <label htmlFor="newspaper" className="text-sm">
                          Newspaper
                        </label>
                        <input
                          className="h-4 w-4 text-blue-600 focus:ring-blue-600 border-gray-300 rounded"
                          type="checkbox"
                          id="website"
                        />
                        <label htmlFor="website" className="text-sm">
                          Website
                        </label>
                        <input
                          className="h-4 w-4 text-blue-600 focus:ring-blue-600 border-gray-300 rounded"
                          type="checkbox"
                          id="friends"
                        />
                        <label htmlFor="friends" className="text-sm">
                          Friends
                        </label>
                        <input
                          className="h-4 w-4 text-blue-600 focus:ring-blue-600 border-gray-300 rounded"
                          type="checkbox"
                          id="social_media"
                        />
                        <label htmlFor="social_media" className="text-sm">
                          Social Media
                        </label>
                        <input
                          className="h-4 w-4 text-blue-600 focus:ring-blue-600 border-gray-300 rounded"
                          type="checkbox"
                          id="others"
                        />
                        <label htmlFor="others" className="text-sm">
                          Others
                        </label>
                      </div>
                    </div>

                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700  dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900"
                        id="message"
                        placeholder="Leave us a message"
                        cols={3}
                      />
                    </div>
                    <button
                      type="button"
                      className="w-full rounded-md bg-yellow px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
              <img
                alt="Contact us"
                className="hidden h-full w-full rounded-lg object-cover lg:block"
                src="/assets/kapol-school.jpg"
              />
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-gray-100">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-6">
            <div className="py-20">
              <div className="grid grid-cols-1 gap-x-20 gap-y-8 lg:grid-cols-2">
                <div className="space-y-4">
                  <p className="w-full text-4xl font-bold text-pink">
                    Our School
                  </p>
                  <p className="w-full text-lg text-gray-600">
                    Find us at these locations.
                  </p>
                  <iframe
                    className="w-full h-80"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d469.1158362137095!2d72.84373962736846!3d19.21074320337575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1715096771049!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="space-y-4 divide-y-2">
                  <div className="flex flex-col space-y-2 pt-4 first:pt-0 lg:w-full">
                    <p className="w-full text-xl font-semibold font-[Cardo-Bold] text-sky-950">
                      KAPOL GLOBAL ACADEMY (IGCSE)
                    </p>
                    {/* <p className="w-full text-base  text-gray-600">
                      {location.timings}
                    </p> */}
                    <p className="text-sm font-semibold text-gray-600">
                      CTS-101 C, Mahavir Nagar, Near Kanla Vihar Sports Club
                      Kandivali West Mumbai 400067
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
