import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import Container from "../ui/Container";
import { FaBarsStaggered } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };
  return (
    <nav className="py-2 md:py-3 lg:py-8">
      <Container>
        <div className="flex items-center justify-between sm:justify-center relative">
          {/* nav-menu */}
          <div className="relative sm:absolute left-0 md:relative">
            <FaBarsStaggered
              className="text-sm cursor-pointer md:hidden"
              onClick={() => toggleMenu()}
            />
            <div
              className={twMerge(
                "fixed h-lvh w-screen z-10 top-0 bg-black md:bg-inherit md:relative md:h-auto md:w-auto md:p-0 md:left-0 py-10 px-3 transition-all duration-500",
                menu === true ? "left-0" : "left-[-100%]"
              )}
            >
              <div className="flex flex-col items-start justify-start gap-5 md:flex-row md:justify-center md:left-0 md:items-center lg:gap-14">
                {/* logo  */}
                <div className="font-lobster text-base sm:text-lg md:text-2xl text-white md:hidden">
                  Foodieland <span className="text-red">.</span>
                </div>
                {/* nav menu */}
                <Link to="/" className="text-white md:text-black">
                  Home
                </Link>
                <Link to="/about" className="text-white md:text-black">
                  About
                </Link>
                <Link to="/blog" className="text-white md:text-black">
                  Blog
                </Link>
                <Link to="/contact" className="text-white md:text-black">
                  Contact
                </Link>
                {/* social media links  */}
                <div className="flex items-center justify-start gap-2 text-white md:hidden">
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-xl"
                  >
                    <FiFacebook />
                  </a>
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-xl"
                  >
                    <FiTwitter />
                  </a>
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-xl"
                  >
                    <FaInstagram />
                  </a>
                </div>
                {/* close icon  */}
                <div className="absolute top-3 right-3 text-white font-bold">
                  <FaXmark
                    className="text-lg cursor-pointer md:hidden"
                    onClick={() => toggleMenu()}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* logo  */}
          <div className="font-lobster text-base sm:text-lg md:text-2xl text-black md:absolute md:left-0">
            Foodieland <span className="text-red">.</span>
          </div>
          {/* social media links  */}
          <div className="hidden sm:flex items-center justify-end gap-3 absolute right-0">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <BsInstagram />
            </a>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
