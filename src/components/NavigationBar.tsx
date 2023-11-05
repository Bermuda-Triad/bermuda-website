import { useState } from "react";
import Image from "../assets/images/Logo.svg";
import Emoji from "../assets/images/emoji-smile.svg";
import ContactUsForm from "./ContactUsForm";

function NavigationBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-10">
        <div className="flex justify-between items-center">
          <img src={Image} alt="" />
          <div className="lg:flex gap-6 hidden">
            <a href="#services" className="hover:text-[#A259FF]">
              Services
            </a>
            <a href="#projects" className="hover:text-[#A259FF]">
              Projects
            </a>
            <a href="#process" className="hover:text-[#A259FF]">
              Process
            </a>
          </div>

          <button
            onClick={openModal}
            id="openContactForm"
            className="flex gap-2 items-center py-2 px-4 bg-[#A259FF] hover:bg-purple-500 text-white rounded-full font-bold"
          >
            <p className="text-xs lg:text-base">Work with us</p>
            <img src={Emoji} alt="" className="w-6 h-6 lg:w-auto lg:h-auto" />
          </button>
        </div>
        {isModalOpen && <ContactUsForm closeModal={closeModal} />}
      </div>
    </div>
  );
}

export default NavigationBar;
