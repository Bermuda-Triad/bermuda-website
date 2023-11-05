import NavigationBar from "../components/NavigationBar";
import Design from "../assets/images/hero/Group 26.svg";
import Web from "../assets/images/hero/Group 27.svg";
import Android from "../assets/images/hero/Group 28.svg";
import PatternOne from "../assets/images/hero/pattern1.svg";
// import EmojiFire from "../assets/images/emoji_fire.svg";
import Image from "../assets/images/Logo.svg";

import Logo1 from "../assets/images/Logos/1.svg";
import Logo2 from "../assets/images/Logos/2.svg";
import Logo3 from "../assets/images/Logos/3.svg";
import Logo4 from "../assets/images/Logos/4.svg";
import Logo5 from "../assets/images/Logos/5.svg";
// import Logo6 from "../assets/images/Logos/6.svg";
// import Logo7 from "../assets/images/Logos/7.svg";

import Service1 from "../assets/images/services/web.png";
import Service2 from "../assets/images/services/android.png";
import Service3 from "../assets/images/services/design.png";

import Design1 from "../assets/images/designs/Group 1.png";
import Design2 from "../assets/images/designs/Group 2.png";
import Design3 from "../assets/images/designs/Group 3.png";
import Design4 from "../assets/images/designs/Group 4.png";
import Design5 from "../assets/images/designs/Group 5.png";
import Design6 from "../assets/images/designs/Group 6.png";
import Design7 from "../assets/images/designs/Group 7.png";
import Design8 from "../assets/images/designs/Group 8.png";
import Design9 from "../assets/images/designs/Group 9.png";
import Design10 from "../assets/images/designs/Group 10.png";
import Design11 from "../assets/images/designs/Group 11.png";
import Design12 from "../assets/images/designs/Group 12.png";
import Design13 from "../assets/images/designs/Group 13.png";
import Design14 from "../assets/images/designs/Group 14.png";
import Design15 from "../assets/images/designs/Group 15.png";

import Project1 from "../assets/images/projects/Missing.svg";
import Project2 from "../assets/images/projects/okoa.png";
import Project3 from "../assets/images/projects/HelpFind.png";
import Process from "../assets/images/projects/process.svg";
import ProjectCards from "../components/ProjectCards";
import SubTitles from "../components/SubTitles";

import Illustration1 from "../assets/images/illustrations/Group 2.svg";
import Illustration2 from "../assets/images/illustrations/Group 3.svg";
import Illustration3 from "../assets/images/illustrations/Group.svg";
import Illustration4 from "../assets/images/illustrations/Group 5.svg";

import { RiTwitterXFill } from "react-icons/ri";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiDribbbleFill } from "react-icons/ri";

import { HiArrowSmRight } from "react-icons/hi";

import Marquee from "react-fast-marquee";
import MoreDesigns from "../components/MoreDesigns";
import { useState } from "react";
import ContactUsForm from "../components/ContactUsForm";

function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="scroll-smooth">
      <div className="bg-[#18171C]">
        <NavigationBar />
        <div className="relative">
          <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-10 relative">
            <div className="relative lg:mt-10">
              <h1 className="text-center text-[42px] lg:text-[52px] font-bold mx-auto leading-none">
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
                className="absolute top-20 md:left-0 lg:left-20"
              />
              <img
                src={Android}
                alt=""
                className="absolute top-20 md:right-0 lg:right-20"
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
      <div className="bg-[#F6E5D6]">
        <div className="lg:py-20 text-[#262424] lg:pb-32">
          <p className="text-[#262424] font-bold text-center text-2xl py-6">
            Trusted By
          </p>
          <div className="grid grid-cols-3 lg:flex justify-center gap-8 lg:gap-12 px-4">
            <div className="flex justify-center">
              <img src={Logo1} alt="" className="lg:w-40" />
            </div>
            <div className="flex justify-center">
              <img src={Logo2} alt="" className="lg:w-28" />
            </div>
            <div className="flex justify-center">
              <img src={Logo3} alt="" className="lg:w-40" />
            </div>
            <div className="flex justify-center">
              <img src={Logo5} alt="" className="w-28" />
            </div>
            <div className="flex justify-center">
              <img src={Logo4} alt="" className="w-14 lg:w-20" />
            </div>

            {/* <img src={Logo6} alt="" className="lg:w-28" />
            <img src={Logo7} alt="" className="lg:w-28" /> */}
          </div>
        </div>

        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
          <p className="text-[#FF5722]">Services</p>
          <p className="text-3xl mt-3 font-bold text-[#262424]" id="services">
            What we do
          </p>
          {/* <SubTitles sub={""} heading={""} colored={""} last={""} /> */}
          <div className="mt-6">
            <div className="grid lg:grid-cols-2 items-center">
              <img src={Service1} alt="" className="w-full mb-4 lg:w-auto " />
              <div>
                <p className="font-bold text-xl text-[#262424]">
                  Web Development
                </p>
                <p className="text-[#262424] mt-4">
                  Web development is the art of creating websites. It's like
                  building a house, but on the internet!😎. Web developers use
                  special tools and languages to design and construct web pages,
                  making sure they look great, work smoothly, and provide the
                  information or services you and your business need.
                </p>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 items-center py-12">
              <div>
                <div className="lg:hidden">
                  <img
                    src={Service2}
                    alt=""
                    className="w-full lg:w-auto mb-4"
                  />
                </div>
                <p className="font-bold text-xl text-[#262424]">
                  Mobile App Development
                </p>
                <p className="text-[#262424] mt-4">
                  App development is the creative process of building digital
                  programs that run on your mobile devices, such as smartphones
                  and tablets. App developers use coding languages to craft
                  software that can perform a wide range of tasks, from games
                  and social networking to organizing your to-do lists or
                  helping you shop online. It's about bringing your ideas to
                  life and making them accessible with a tap of your finger.
                </p>
              </div>
              <div className="lg:flex justify-end hidden">
                <img src={Service2} alt="" className="w-full mb-4 lg:w-auto" />
              </div>
            </div>
            <div className="grid lg:grid-cols-2 items-center">
              <img src={Service3} alt="" className="w-full mb-4 lg:w-auto " />
              <div>
                <p className="font-bold text-xl text-[#262424]">UI/UX Design</p>
                <p className="text-[#262424] mt-4">
                  UI/UX design is like the magic that makes websites and apps
                  easy to use and beautiful to look at. It's about creating
                  buttons, menus, and screens that feel intuitive and look
                  appealing. UI (User Interface) focuses on how things appear,
                  while UX (User Experience) is about how easy and enjoyable it
                  is to use the website or app. It's like making sure everything
                  is user-friendly and visually pleasing, just like arranging
                  furniture in a cozy room.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#18171C]" id="projects">
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24">
          <SubTitles
            sub={"Portfolio"}
            heading={" Recent "}
            colored={"Projects"}
            last={""}
          />
          <div className="grid lg:grid-cols-2 gap-10 mt-8">
            <ProjectCards image={Project1} title={" Missing Mark"} />
            <ProjectCards image={Project2} title={" Okoa Sem"} />
            <ProjectCards image={Project1} title={" Bizup"} />
            <ProjectCards image={Project3} title={" HelpFind"} />
          </div>
        </div>

        <div>
          <div className="">
            <Marquee direction="right" autoFill>
              <p className="text-xl lg:text-[32px] font-semibold bg-[#A86FF4] py-2 lg:py-4 overflow-hidden">
                WEB DEVELOPMENT | APP DEVELOPMENT | UI/UX DESIGN | WEB
                DEVELOPMENT | APP DEVELOPMENT | UI/UX DESIGN | WEB DEVELOPMENT |
                | APP DEVELOPMENT | UI/UX DESIGN |{""}
              </p>
            </Marquee>
          </div>
        </div>

        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-24">
          <div>
            <div>
              <div>
                <p className="text-[#FF5E3A] text-base font-semibold text-center">
                  Process
                </p>
                <p
                  className="leading-none text-[36px] font-bold mt-3 text-center"
                  id="process"
                >
                  How we{" "}
                  <span className="text-[#A86FF4] ">
                    Work<br></br> Together
                  </span>{" "}
                  with you
                </p>
              </div>
              <div className="mt-16">
                <div className="lg:grid grid-cols-3 gap-10 items-center hidden">
                  <div>
                    <div className="flex items-center gap-5">
                      <p className="font-bold text-[96px]">1</p>
                      <p>
                        <span className="text-white font-bold">
                          Brief/Short Details:{" "}
                        </span>
                        Come to us with a project brief or short project details
                        that you have currently to give us an idea of your
                        project or product.
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="font-bold text-[96px]">3</p>
                      <p>
                        <span className="text-white font-bold">
                          Providing Quote:{" "}
                        </span>
                        We will be providing you a quote for the project after
                        having the answers from you.
                      </p>
                    </div>
                  </div>
                  <div className="lg:flex justify-center">
                    <img src={Process} alt="" className="" />
                  </div>
                  <div>
                    <div className="flex items-center gap-5">
                      <p className="font-bold text-[96px]">2</p>
                      <p className="text-[16px]">
                        <span className="text-white font-bold">
                          Questions:{" "}
                        </span>
                        After having the details from you, we'll ask questions
                        related to your project to understand the project length
                        and scope.
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="font-bold text-[96px]">4</p>
                      <p>
                        <span className="text-white font-bold">
                          Get Started:{" "}
                        </span>
                        If the quote works for both of us, we can have a short
                        meeting or we can directly jump into the process of
                        getting started.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:gap-4 items-center lg:hidden">
                  <div>
                    <div className="flex items-center gap-5">
                      <p className="font-bold text-[96px]">1</p>
                      <p>
                        <span className="text-white font-bold">
                          Brief/Short Details:{" "}
                        </span>
                        Come to us with a project brief or short project details
                        that you have currently to give us an idea of your
                        project or product.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <p className="font-bold text-[96px]">2</p>
                    <p className="text-[16px]">
                      <span className="text-white font-bold">Questions: </span>
                      After having the details from you, we'll ask questions
                      related to your project to understand the project length
                      and scope.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="font-bold text-[96px]">3</p>
                    <p>
                      <span className="text-white font-bold">
                        Providing Quote:{" "}
                      </span>
                      We will be providing you a quote for the project after
                      having the answers from you.
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <p className="font-bold text-[96px]">4</p>
                    <p>
                      <span className="text-white font-bold">
                        Get Started:{" "}
                      </span>
                      If the quote works for both of us, we can have a short
                      meeting or we can directly jump into the process of
                      getting started.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-12">
                <button
                  onClick={openModal}
                  className="flex gap-2 items-center py-4 px-6 bg-[#A259FF] hover:bg-purple-500 text-white rounded-full font-semibold"
                >
                  <p className="text-lg lg:text-xl">Work with us</p>
                  <div className="text-2xl">
                    <HiArrowSmRight />
                  </div>
                </button>
              </div>
              {isModalOpen && <ContactUsForm closeModal={closeModal} />}
              <div className="pt-32">
                <div className="text-center">
                  <SubTitles
                    sub={"Testimonials"}
                    heading={"Words from our"}
                    colored={"Clients"}
                    last={""}
                  />
                  <div className="grid lg:grid-cols-3 mt-12 lg:gap-10 gap-5">
                    <div className="text-left border p-6 rounded-xl border-[#3c3f42]">
                      <p className="text-[#94A3B8]">
                        Aliquet ridiculus mi porta habitant vulputate rhoncus,
                        mattis amet enim. Sit purus venenatis velit semper
                        lectus sed ornare quam nulla. Lacus, ut congue sagittis
                        vel nisi integer imperdiet a vitae.
                      </p>
                      <p className="font-bold text-lg mt-4 text-[#94A3B8]">
                        Hellena John
                      </p>
                    </div>
                    <div className="text-left border p-6 rounded-xl border-[#3c3f42]">
                      <p className="text-[#94A3B8]">
                        Aliquet ridiculus mi porta habitant vulputate rhoncus,
                        mattis amet enim. Sit purus venenatis velit semper
                        lectus sed ornare quam nulla. Lacus, ut congue sagittis
                        vel nisi integer imperdiet a vitae.
                      </p>
                      <p className="font-bold text-lg mt-4 text-[#94A3B8]">
                        Hellena John
                      </p>
                    </div>
                    <div className="text-left border p-6 rounded-xl border-[#3c3f42]">
                      <p className="text-[#94A3B8]">
                        Aliquet ridiculus mi porta habitant vulputate rhoncus,
                        mattis amet enim. Sit purus venenatis velit semper
                        lectus sed ornare quam nulla. Lacus, ut congue sagittis
                        vel nisi integer imperdiet a vitae.
                      </p>
                      <p className="font-bold text-lg mt-4 text-[#94A3B8]">
                        Hellena John
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:py-16 pb-8 ">
          <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <SubTitles
              sub={"More of "}
              heading={"What we have"}
              colored={"done"}
              last={""}
            />
          </div>
          <Marquee pauseOnHover>
            <MoreDesigns images={Design1} links={""} />
            <MoreDesigns images={Design3} links={""} />
            <MoreDesigns images={Design5} links={""} />
            <MoreDesigns images={Design7} links={""} />
            <MoreDesigns images={Design9} links={""} />
            <MoreDesigns images={Design11} links={""} />
            <MoreDesigns images={Design13} links={""} />
            <MoreDesigns images={Design15} links={""} />
          </Marquee>
          <div className="mt-6">
            <Marquee pauseOnHover direction="right">
              <MoreDesigns images={Design2} links={""} />
              <MoreDesigns images={Design4} links={""} />
              <MoreDesigns images={Design6} links={""} />
              <MoreDesigns images={Design8} links={""} />
              <MoreDesigns images={Design10} links={""} />
              <MoreDesigns images={Design12} links={""} />
              <MoreDesigns images={Design14} links={""} />
            </Marquee>
          </div>
        </div>
        <div className="py-8 lg:py-32 bg-[#F6E5D6] px-4 relative">
          <div className="relative">
            <p className="font-bold text-center text-3xl lg:text-5xl text-[#18171C]">
              We Can Help You <br></br> Grow and Innovate.
            </p>
            <div className="flex justify-center mt-12">
              <button
                onClick={openModal}
                className="flex gap-2 items-center py-4 px-6 bg-[#A259FF] hover:bg-purple-500 text-white rounded-full font-semibold"
              >
                <p className="text-lg lg:text-xl">Let’s Work Together</p>
                <div className="text-2xl">
                  <HiArrowSmRight />
                </div>
              </button>
            </div>
            <div>
              <img
                src={Illustration1}
                alt=""
                className="absolute top-0 right-80 hidden lg:block"
              />
              <img
                src={Illustration2}
                alt=""
                className="absolute lg:left-80 lg:-top-20 -bottom-30 lg:bottom-0 hidden lg:block"
              />
              <img
                src={Illustration3}
                alt=""
                className="absolute right-0 hidden lg:block"
              />
              <img
                src={Illustration4}
                alt=""
                className="absolute -bottom-30 hidden lg:block"
              />
            </div>
          </div>
        </div>

        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
          <div className="flex flex-col-reverse justify-center gap-10 lg:flex-row lg:justify-between items-center">
            <img src={Image} alt="" />
            <p className="text-center">
              © 2023 Bermuda Studio. All Rights Reserved.
            </p>
            <div className="flex text-3xl gap-2">
              <RiTwitterXFill />
              <RiLinkedinBoxFill />
              <RiInstagramFill />
              <RiDribbbleFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
