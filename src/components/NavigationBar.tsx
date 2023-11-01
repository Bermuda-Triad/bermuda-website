import Image from "../assets/images/Logo.svg";
import Emoji from "../assets/images/emoji-smile.svg";

function NavigationBar() {
  return (
    <div>
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-10">
        <div className="flex justify-between items-center">
          <img src={Image} alt="" />
          <div className="lg:flex gap-6 hidden">
            <p>Services</p>
            <p>Projects</p>
            <p>Process</p>
          </div>
          <div className="flex gap-2 items-center py-2 px-4 bg-[#A259FF] hover:bg-purple-500 text-white rounded-full font-bold">
            <p className="text-xs lg:text-base">Work with us</p>
            <img src={Emoji} alt="" className="w-6 h-6 lg:w-auto lg:h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
