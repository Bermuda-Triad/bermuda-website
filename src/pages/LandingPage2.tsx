import { ForwardIcon, ForwardIconDark } from "../components/revamp/Icons"
import NavBar from "../components/revamp/NavBar"
import spin from "../assets/revamp/Logo/spin.svg"
import MoreDesigns from "../components/revamp/MoreDesigns"
import BigTextOne from "../assets/revamp/others/BigText.svg"
import ThumbDNF from "../assets/revamp/projects/dnf/ThumbDnf (1).png"
import ThumbMissing from "../assets/revamp/projects/missing-marks/ThumbMissing 2.png"
import tujengane from "../assets/revamp/Logo/tujengane-logo.svg"
import dnf from "../assets/revamp/Logo/dnf-logo.svg"
import user from "../assets/revamp/others/User.svg"
import Process from "../assets/revamp/illustrations/meditating.svg"
import { Link } from "react-router-dom"
import Daisy from "../assets/revamp/testimonials/founder.png"
import Footer from "../components/revamp/Footer"
import Marquee from "react-fast-marquee"


const LandingPage2 = () => {
    return (
        <div className="landing-page-two bg-[#18171C]">
            <NavBar />
            <div className=" relative px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
                <div>
                    <h1 className="hero2 text-5xl lg:text-[78px] lg:leading-[70px] font-bold lg:font-extrabold lg:w-4/5 lg:tracking-wide">Empowering Digital Potential for Growing Businesses.</h1>
                    <p className="mt-32 lg:mt-28 lg:w-1/3 text-sm lg:text-base">Our main focus in Web Development ,App Development & UX/UI Design is to create tailored solutions that align with our clients' business goals and effectively address their user’s needs.</p>
                    <div className="flex ">
                        <Link to="/contact">
                            <div className="flex px-6 py-3 bg-[#09CF83] rounded-full gap-2 mt-4 lg:my-10 hover:translate-x-2 transform duration-300">
                                <span className="text-[#18171C] font-semibold">Start a Project</span>
                                <span>
                                    <ForwardIconDark />
                                </span>
                            </div>
                        </Link>

                    </div>
                    <img src={spin} alt="" className="absolute right-4 bottom-[30%] lg:bottom-0 lg:right-28 lg:top-72 animate-[spin_10s_linear_infinite] w-20 lg:w-auto" />
                </div>
            </div>
            <section className="pb-6">
                <MoreDesigns />
            </section>
            <section className="bg-white ">
                <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 py-10 lg:py-20" id="services">
                    <div className="grid lg:grid-cols-3 gap-10">
                        <div>
                            <p className="hero2 text-[#18171C] text-4xl lg:text-6xl font-bold ">Services</p>
                            <p className="text-[#18171C] py-3 lg:py-10 lg:w-3/4">Professional solutions tailored to your business's needs.</p>
                            <div className="lg:flex hidden">
                                <a href="" className="flex px-6 py-3 bg-[#09CF83] rounded-full gap-2 hover:translate-x-2 transform duration-300">
                                    <span className="text-[#18171C] font-medium">Start a Project</span>
                                    <span>
                                        <ForwardIconDark />
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="grid lg:grid-cols-2 gap-10">
                                <div className="lg:p-6 rounded-xl transition delay-75 ease-in-out">
                                    <p className="hero2 text-[#18171C] text-base lg:text-[24px] font-bold pb-2 lg:pb-4">Web Development</p>
                                    <p className="text-[#18171C] text-sm lg:text-base">Web development is the art of creating websites. It's like building a house, but on the internet!😎. Web developers use special tools and languages to design and construct web pages, making sure they look great, work smoothly, and provide the information or services you and your business need.</p>
                                </div>
                                <div className="lg:p-6 rounded-xl transition delay-75 ease-in-out">
                                    <p className="hero2 text-[#18171C] text-base lg:text-[24px] font-bold pb-2 lg:pb-4">UI/UX Design</p>
                                    <p className="text-[#18171C] text-sm lg:text-base"> UI/UX design is like the magic that makes websites and apps easy to use and beautiful to look at. It's about creating buttons, menus, and screens that feel intuitive and look appealing. UI (User Interface) focuses on how things appear, while UX (User Experience) is about how easy and enjoyable it is to use the website or app. It's like making sure everything is user-friendly and visually pleasing, just like arranging furniture in a cozy room.</p>
                                </div>
                                <div className="lg:p-6 rounded-xl transition delay-75 ease-in-out">
                                    <p className="hero2 text-[#18171C] text-base lg:text-[24px] font-bold pb-2 lg:pb-4">App Development</p>
                                    <p className="text-[#18171C] text-sm lg:text-base">App development is the creative process of building digital programs that run on your mobile devices, such as smartphones and tablets. App developers use coding languages to craft software that can perform a wide range of tasks, from games and social networking to organizing your to-do lists or helping you shop online. It's about bringing your ideas to life and making them accessible with a tap of your finger.</p>
                                </div>
                            </div>
                            <div className="flex lg:hidden pt-8">
                                <a href="" className="flex px-6 py-3 bg-[#09CF83] rounded-full gap-2 hover:translate-x-2 transform duration-300">
                                    <span className="text-[#18171C] font-medium">Work With Us</span>
                                    <span>
                                        <ForwardIconDark />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={BigTextOne} alt="" className="lg:mt-16 hidden lg:block" />
            </section>
            <section className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 py-10 lg:py-20" id="projects">
                <div>
                    <p className="hero2 text-4xl lg:text-6xl font-bold">Recent Work</p>
                    <div className="mt-8 relative">
                        <img src={ThumbDNF} alt="" className="w-full" />
                        <div className="lg:w-[436px] lg:p-6 lg:bg-[#09CF83] rounded-xl lg:absolute lg:left-[2%] lg:bottom-[4%] mt-4">
                            <p className="lg:text-[#18171C] text-sm lg:text-base font-semibold pb-2">2024</p>
                            <p className="lg:text-[#18171C] text-3xl lg:text-[28px] font-semibold leading-none hero2">Daisy Nyongesa Foundation Website.</p>
                            <div className="flex gap-2 pt-3">
                                <p className="lg:text-[#18171C] px-4 py-0.5 font-medium border border-[#2d2d2d] lg:border-[#1CBA6D] rounded-full text-xs ">UI/UX Design</p>
                                <p className="lg:text-[#18171C] px-4 py-0.5 font-medium border border-[#2d2d2d] lg:border-[#1CBA6D] rounded-full text-xs ">Web Development</p>
                            </div>
                            <p className="py-6 lg:text-[#18171C] text-sm">Daisy Nyongesa Foundation seeks to address societal needs. This is after identifying the existing gaps ... <span className="font-bold lg:text-[#18171C]">Read More</span></p>
                            <div className="flex">
                                <Link to="/dnf-website" >
                                    <a className="flex items-center px-6 py-3 bg-[#09CF83] lg:bg-[#18171C] rounded-full gap-2 hover:translate-x-2 transform duration-300">
                                        <span className="font-semibold text-[#18171C] lg:text-white text-sm leading-none">View Project</span>
                                        <span className="hidden lg:block">
                                            <ForwardIcon />
                                        </span>
                                        <span className="lg:hidden">
                                            <ForwardIconDark />
                                        </span>
                                    </a>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="mt-16 lg:mt-8 relative">
                        <img src={ThumbMissing} alt="" className="" />
                        <div className="lg:w-[436px] lg:p-6 lg:bg-[#09CF83] rounded-xl lg:absolute lg:left-[2%] lg:bottom-[4%] mt-4">
                            <p className="lg:text-[#18171C] text-sm lg:text-base font-semibold pb-2">2023</p>
                            <p className="lg:text-[#18171C] text-3xl lg:text-[28px] font-semibold leading-none hero2">Missing Marks System</p>
                            <div className="flex gap-2 pt-3">
                                <p className="lg:text-[#18171C] px-4 py-0.5 font-medium border border-[#2d2d2d] lg:border-[#1CBA6D] rounded-full text-xs ">UI/UX Design</p>
                                <p className="lg:text-[#18171C] px-4 py-0.5 font-medium border border-[#2d2d2d] lg:border-[#1CBA6D] rounded-full text-xs ">Web Development</p>
                            </div>
                            <p className="py-6 lg:text-[#18171C] text-sm">Daisy Nyongesa Foundation seeks to address societal needs. This is after identifying the existing gaps ... <span className="font-bold lg:text-[#18171C]">Read More</span></p>
                            <div className="flex">
                                <Link to="/missing-marks" >
                                    <div className="flex items-center px-6 py-3 bg-[#09CF83] lg:bg-[#18171C] rounded-full gap-2 hover:translate-x-2 transform duration-300">
                                        <span className="font-semibold text-[#18171C] lg:text-white text-sm leading-none">View Project</span>
                                        <span className="hidden lg:block">
                                            <ForwardIcon />
                                        </span>
                                        <span className="lg:hidden">
                                            <ForwardIconDark />
                                        </span>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                    {/* <div className="flex justify-center">
                        <a className="flex px-6 py-3 bg-[#dcdcdc] rounded-full gap-2 mt-4 lg:my-10">
                            <span className="text-[#18171C] font-semibold">More (Comming Soon)</span>
                        </a>
                    </div> */}

                </div>
            </section>
            <div className="pt-16">
                <Marquee>
                    <p className="uppercase tracking-tight text-7xl font-bold hero2 opacity-25 text-[#09CF83]">More Projects Coming Soon **  More Projects Coming Soon **  More Projects Coming Soon **  More Projects Coming Soon **  More Projects Coming Soon **  More Projects Coming Soon **  More Projects Coming Soon ** </p>
                </Marquee>
            </div>
            <section className="bg-white">
                <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24" id="process">
                    <div>
                        <div>
                            <div className="flex justify-center">
                                <p className="hero2 lg:w-1/2 text-center text-[#18171C] text-4xl lg:text-6xl font-bold">How we Work <span className="text-[#09CF83]"> Together</span> with you.</p>
                            </div>
                            <div className="mt-16">
                                <div className="lg:grid grid-cols-3 gap-10 items-center hidden">
                                    <div>
                                        <div className="flex items-center gap-5">
                                            <p className="font-bold text-[96px] text-[#18171C]">1</p>
                                            <p className="text-[#18171C]">
                                                <span className="text-[#18171C] font-bold">
                                                    Brief/Short Details:{" "}
                                                </span>
                                                Come to us with a project brief or short project details
                                                that you have currently to give us an idea of your
                                                project or product.
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <p className="font-bold text-[96px] text-[#18171C]">3</p>
                                            <p className="text-[#18171C]">
                                                <span className="text-[#18171C] font-bold">
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
                                            <p className="font-bold text-[96px] text-[#18171C]">2</p>
                                            <p className="text-[16px] text-[#18171C]">
                                                <span className="text-[#18171C] font-bold">
                                                    Questions:{" "}
                                                </span>
                                                After having the details from you, we'll ask questions
                                                related to your project to understand the project length
                                                and scope.
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <p className="font-bold text-[96px] text-[#18171C]">4</p>
                                            <p className="text-[#18171C]">
                                                <span className="text-[#18171C] font-bold">
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
                                            <p className="font-bold text-[96px] text-[#18171C]">1</p>
                                            <p className="text-[#18171C]">
                                                <span className="text-[#18171C] font-bold">
                                                    Brief/Short Details:{" "}
                                                </span>
                                                Come to us with a project brief or short project details
                                                that you have currently to give us an idea of your
                                                project or product.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <p className="font-bold text-[96px] text-[#18171C]">2</p>
                                        <p className="text-[16px] text-[#18171C]">
                                            <span className="text-[#18171C] font-bold">Questions: </span>
                                            After having the details from you, we'll ask questions
                                            related to your project to understand the project length
                                            and scope.
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <p className="font-bold text-[96px] text-[#18171C]">3</p>
                                        <p className="text-[#18171C]">
                                            <span className="text-[#18171C] font-bold">
                                                Providing Quote:{" "}
                                            </span>
                                            We will be providing you a quote for the project after
                                            having the answers from you.
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <p className="font-bold text-[96px] text-[#18171C]">4</p>
                                        <p className="text-[#18171C]">
                                            <span className="text-[#18171C] font-bold">
                                                Get Started:{" "}
                                            </span>
                                            If the quote works for both of us, we can have a short
                                            meeting or we can directly jump into the process of
                                            getting started.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="p-16 lg:pt-56 font-bold">
                        <p className="text-center text-4xl text-[#18171C] font-bold hero2">Trusted By</p>
                        <div className="flex gap-8 lg:gap-10 items-center justify-center pt-8 ">
                            <img src={tujengane} alt="" className="w-32 lg:w-auto" />
                            <img src={dnf} alt="" className="w-40 lg:w-auto" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 pt-10 lg:py-20">
                <div>
                    <div>
                        <p className="text-center text-4xl lg:text-6xl font-bold hero2">Words from our Clients</p>
                        <div className="lg:flex lg:gap-10 py-16">
                            <div className="p-6 border rounded-xl border-[#3a3a3b] hover:-translate-y-2 transform duration-300">
                                <p className="mb-4">
                                    " We're incredibly grateful to Tarech Studio for their invaluable assistance. Their team's dedication, professionalism, and expertise made all the difference in achieving our goals."
                                </p>
                                <div className="flex gap-4">
                                    <img src={user} alt="" className="w-12 h-12" />
                                    <div>
                                        <p>Raj </p>
                                        <p>Founder, Tujengane Marketing Agency</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2 lg:mt-0 p-6 border rounded-xl border-[#3a3a3b] hover:-translate-y-2 transform duration-300">
                                <p className="mb-4">"👏 Heartfelt thanks to the team for their outstanding service and expertise."</p>
                                <div className="flex gap-4">
                                    {/* <img src={ } alt="" className="w-12 h-12" /> */}
                                    <div className="w-12 h-12 bg-black rounded-full"></div>
                                    <div>
                                        <p>Simon Mbuvi</p>
                                        <p>Business Owner</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 border rounded-xl border-[#3a3a3b] hover:-translate-y-2 transform duration-300 my-4 lg:my-0">
                                <p className="mb-4">"Working with this team is amazing 🎉 . They delivered beyond our expectations, and the results speak for themselves. Grateful for their expertise and dedication!"</p>
                                <div className="flex gap-4">
                                    <img src={Daisy} alt="" className="w-12 h-12" />
                                    <div>
                                        <p>Daisy Nyongesa, Former Senetor</p>
                                        <p> Founder, DNF Foundation</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Footer />
            </section>

        </div>
    )
}

export default LandingPage2