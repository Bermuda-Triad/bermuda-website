import NavigationBar from "../components/NavigationBar";
import Design from "../assets/images/hero/Group 26.svg";
import Web from "../assets/images/hero/Group 27.svg";
import Android from "../assets/images/hero/Group 28.svg";
import PatternOne from "../assets/images/hero/pattern1.svg";

function LandingPage() {
  return (
    <div className="bg-[#18171C]">
      <NavigationBar />
      <div className="relative">
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-10 relative">
          <div className="relative">
            <h1 className="text-center text-[48px] font-bold mx-auto leading-none">
              We Build The <br></br> Best{" "}
              <span className="text-[#A259FF] font-black ">
                Digital Solutions
              </span>
            </h1>
            <p className="text-[#B0AFBB] lg:w-[590px] text-center mx-auto mt-4 text-[18px]">
              Our main focus in{" "}
              <span className="text-white font-bold">
                {" "}
                Web Development, App Development & UX/UI Design
              </span>{" "}
              is to create tailored solutions that align with our
              <span className="text-white font-bold">
                {" "}
                clients' business goals
              </span>{" "}
              and effectively address their
              <span className="text-white font-bold"> user’s needs.</span>
            </p>
          </div>
          <div className="hidden lg:block">
            <img src={Design} alt="" className="mx-auto mt-4" />
            <img
              src={Web}
              alt=""
              className="absolute top-20 md:left-0 left-20"
            />
            <img
              src={Android}
              alt=""
              className="absolute top-20 md:right-0 right-20"
            />
          </div>
          <div className="flex justify-center gap-2 text-sm mt-6 lg:hidden">
            <p className="px-4 py-2.5 bg-[#1AACFF]">Web Dev</p>
            <p className="px-4 py-2.5 bg-[#FF5722]">UI/UX Design</p>
            <p className="px-4 py-2.5 bg-[#1CBA6D]">Android Dev</p>
          </div>
        </div>
        <img
          src={PatternOne}
          alt=""
          className="absolute left-0 bottom-20 hidden lg:block"
        />
      </div>
    </div>
  );
}

export default LandingPage;
