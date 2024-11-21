"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import OutsideClickHandler from "react-outside-click-handler";

import Avatar from "./Avatar";

function Header({
  login,
  userRole,
  profilePath,
}: {
  login: boolean;
  userRole: String;
  profilePath: string;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenueHandler = () => {
    setIsMenuOpen(() => !isMenuOpen);
  };
  const closeMenueHandler = () => {
    setIsMenuOpen(() => false);
  };
  return (
    // ( py-4 px-4 md:px-10 max-w-screen-xl mx-auto ) add this classes to all  sections.
    <OutsideClickHandler onOutsideClick={closeMenueHandler}>
      <div className="bg-background fixed top-0 left-0 right-0 border-b-2 border-primary/20 z-50 min-h-[75px]">
        <div className="container flex flex-wrap items-center justify-between py-2 text-foreground">
          <Link
            href="/#"
            className="max-w-[160px] min-h-16"
            onClick={closeMenueHandler}
          >
            <Image
              width={500}
              height={100}
              src="https://lwfiles.mycourse.app/64f9d95d01ac55bf5644ea7a-public/c186678f7cd589c185fff8baa189e685.png"
              alt="logo"
              className=""
              priority={true}
            />
          </Link>
          {/* *************** Menu Icon in small devices ************** */}
          <button
            onClick={openMenueHandler}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden bg-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          >
            {!isMenuOpen ? (
              <AlignJustify className="text-primary" />
            ) : (
              <X className="text-red-600" />
            )}
          </button>
          {/* ***************************** */}
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="w-full font-medium flex flex-col gap-5 md:gap-8 items-center p-4 md:py-0 mt-4 border border-white/5 rounded-lg bg-white/10 md:flex-row  md:mt-0 md:border-0 md:bg-transparent ">
              <NavLink
                label="Home"
                link="/"
                closeMenueHandler={closeMenueHandler}
                target={false}
              />
              <NavLink
                label="About"
                link="https://www.gammal.tech/"
                closeMenueHandler={closeMenueHandler}
                target={true}
              />
              <NavLink
                label="Pricing"
                link="/pricing"
                closeMenueHandler={closeMenueHandler}
                target={false}
              />

              {/* line in Small Devices Start */}
              {login && (
                <li className="border border-primary w-[90%] md:hidden"></li>
              )}
              {/* line in Small Devices End*/}

              <li className="mt-2 md:mt-0">
                {!login ? (
                  <Link
                    href="/sign-in"
                    className="py-2 px-3 rounded bg-background3 hover:scale-105 transition "
                    onClick={closeMenueHandler}
                  >
                    Sign In
                  </Link>
                ) : (
                  <Avatar
                    onClick={closeMenueHandler}
                    profilePath={profilePath}
                  />
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute left-0 top-0 -z-10 hidden md:flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
          <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
          <div className="flex h-full w-1/3">
            <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
            <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
          </div>
          <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
        </div>
      </div>
    </OutsideClickHandler>
  );
}

export default Header;

// ********************************************************

const NavLink = ({
  link,
  label,
  closeMenueHandler,
  target,
}: {
  link: any;
  label: any;
  closeMenueHandler: any;
  target: boolean;
}) => {
  return (
    <li>
      <Link
        href={link}
        className="py-2 px-3 rounded md:hover:bg-transparent md:border-0 hover:text-background3 md:p-0 "
        onClick={closeMenueHandler}
        target={target ? "_blank" : ""}
      >
        {label}
      </Link>
    </li>
  );
};
