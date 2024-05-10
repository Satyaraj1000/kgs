import React from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="sticky top-0 z-50 w-full bg-white border-b-2 border-b-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <img src="src/assets/logo.png" alt="logo" width={40} height={40} />
            {/* <span className="space-x-3 font-bold text-sky-900 lg:text-3xl md:flex items-center font-[Cardo-Bold]">
              KAPOL GLOBAL ACADEMY
              <p className="font-medium text-sm md:text-md lg:text-lg">
                (IGCSE)
              </p>
            </span> */}
          </div>
          <div className="hidden lg:block">
            <ul className="inline-flex space-x-8">
              <li>
                <NavLink
                  to="/"
                  className="text-lg font-semibold text-gray-800 transform transition-all delay-100 hover:text-pink"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/academics"
                  className="text-lg font-semibold text-gray-800 transform transition-all delay-100 hover:text-pink"
                >
                  Academics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutus"
                  className="text-lg font-semibold text-gray-800 transform transition-all delay-100 hover:text-pink"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contactus"
                  className="text-lg font-semibold text-gray-800 transform transition-all delay-100 hover:text-pink"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="lg:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <span>
                        <img src="src/assets/logo.png" alt="" width={40}/>
                      </span>
                      <span className="font-bold md:text-xl text-sky-900 space-x-1 md:flex">KAPOL GLOBAL ACADEMY <p className="font-medium">(IGCSE)</p></span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      <NavLink
                        onClick={toggleMenu}
                        to="/"
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          Home
                        </span>
                      </NavLink>
                      <NavLink
                        onClick={toggleMenu}
                        to="/academics"
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          Academics
                        </span>
                      </NavLink>
                      <NavLink
                        onClick={toggleMenu}
                        to="/aboutus"
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          AboutUs
                        </span>
                      </NavLink>
                      <NavLink
                        onClick={toggleMenu}
                        to="/contactus"
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          ContactUs
                        </span>
                      </NavLink>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
