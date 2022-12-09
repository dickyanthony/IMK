import React, { useEffect, useState, Fragment } from "react";
import { getWindowDimensions } from "../../constant";
import logo from "../../assets/logo-header.png";
import respLogo from "../../assets/respLogo.png";
import { NavLink } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import "./header.css";
import SearchBar from "../Search/searchBar";
import { book } from "../../constant";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Header() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const RenderBigHead = () => {
    return (
      <div className="secondary_container">
        <img className="w-10 h-10 ml-10" src={respLogo} alt={logo} />
        <h1 className="text-2xl font-bold text-[#000000] ">IMK</h1>
        <div className="navprod_link">
          <div>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "navprod_text_active" : "navprod_text"
              }
            >
              Home
            </NavLink>
          </div>

          <div>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive ? "navprod_text_active" : "navprod_text"
              }
            >
              About
            </NavLink>
          </div>
        </div>
        <SearchBar placeholder="Cari" data={book} />
      </div>
    );
  };
  const RenderMediumHead = () => {
    return (
      <div
        className="w-full h-20 flex justify-between items-center px-8 text-white"
        style={{ boxShadow: "0px 5px 40px rgba(0, 0, 0, 0.15)" }}
      >
        <img className="w-10 h-10 ml-10" src={respLogo} alt={logo} />

        <div className="navprod_link flex justify-center">
          <div>
            <NavLink
              to={"/"}
              // className={({ isActive }) =>
              //   isActive ? "asdsd" : "navprod_text"
              // }
              className={({ isActive }) =>
                isActive ? "navprod_text_active" : "navprod_text"
              }
            >
              Home
            </NavLink>
          </div>

          <div>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive ? "navprod_text_active" : "navprod_text"
              }
            >
              About
            </NavLink>
          </div>
        </div>
        <SearchBar placeholder="Cari" data={book} />
      </div>
    );
  };

  const RenderSmallHead = () => {
    return (
      <div
        className="w-full h-20 flex justify-between items-center px-8 text-white"
        style={{ boxShadow: "0px 5px 40px rgba(0, 0, 0, 0.15)" }}
      >
        <img className="w-10 h-10 ml-10" src={respLogo} alt={logo} />
        <h1 className="text-2xl font-bold text-[#000000] ml-20 mr-5">IMK</h1>
        <ul className="flex items-center">
          <li className="p-4"></li>
          <li className="p-4">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button>
                  <div class="relative flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-black ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                    <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 group-focus:-rotate-[45deg] origin-center">
                      <div class="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75 group-focus:-translate-y-[1px]"></div>
                      <div class="bg-white h-[1px] rounded"></div>
                      <div class="bg-white h-[2px] w-1/2 rounded self-end transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-left delay-75 group-focus:translate-y-[1px]"></div>
                    </div>
                  </div>
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-5"
                enterFrom="transform opacity-0 "
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-25"
                leaveFrom="transform opacity-100 "
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <NavLink
                          to="/"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Home
                        </NavLink>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <NavLink
                          to="About"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          About
                        </NavLink>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <>
      {windowDimensions.width >= 885 ? (
        <div className="navbar_products flex w-full justify-center">
          <RenderBigHead />
        </div>
      ) : windowDimensions.width >= 662 ? (
        <RenderMediumHead />
      ) : (
        <RenderSmallHead />
      )}
    </>
  );
}

export default Header;
