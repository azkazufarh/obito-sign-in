import { useState } from "react";
import Button from "../atoms/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-between items-center px-6 md:px-12 py-5 border-b border-[#EAECEE]">
      {/* Logo */}
      <img src="/images/obito-logo.png" alt="Logo" className="h-8" />

      {/* Mobile Toggle Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
        <img src="/icons/menu.svg" alt="Menu" className="w-6 h-6" />
      </button>

      {/* Desktop Menu */}
      <div
        className={`absolute md:static top-[5vh] left-0 w-full bg-white md:flex items-center justify-between px-6 md:px-0 py-4 md:py-0 shadow-md md:shadow-none transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-center md:gap-4">
          <a href="#" className="font-bold">
            Home
          </a>
          <a href="#">Pricing</a>
          <a href="#">Features</a>
          <a href="#">Testimonials</a>
        </div>

        <div className="flex flex-row md:flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
          <a href="#">
            <img src="/icons/device-message.svg" alt="Message" />
          </a>
          {/* Line */}
          <div className="w-[1px] h-6 bg-[#EAECEE] hidden md:block"></div>
          <Button type="button">Sign Up</Button>
          <Button type="button" primary>
            My Account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
