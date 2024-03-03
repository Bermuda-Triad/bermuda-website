import { ForwardIcon, ForwardIconDark } from "../components/revamp/Icons"
import NavBar from "../components/revamp/NavBar"
import spin from "../assets/revamp/Logo/spin.svg"
import MoreDesigns from "../components/revamp/MoreDesigns"
import BigTextOne from "../assets/revamp/others/BigText.svg"
import ThumbDNF from "../assets/revamp/projects/dnf/dnf-thumb.png"


const LandingPage2 = () => {
    return (
        <div className="landing-page-two bg-[#18171C]">
            <NavBar />
            <div className=" relative px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
                <div>
                    <h1 className="text-5xl lg:text-8xl lg:leading-[85px] font-extrabold lg:w-4/5 lg:tracking-wide">Empowering Digital Potential for Growing Businesses.</h1>
                    <p className="mt-16 lg:pt-32 lg:w-1/3">Our main focus in Web Development ,App Development & UX/UI Design is to create tailored solutions that align with our clients' business goals and effectively address their user’s needs.</p>
                    <div className="flex">
                        <a href="" className="flex px-6 py-3 bg-[#09CF83] rounded-full gap-2 mt-4 lg:my-10">
                            <p className="text-[#18171C] font-semibold">Start a Project</p>
                            <ForwardIconDark />
                        </a>
                    </div>
                    <img src={spin} alt="" className="absolute right-4 bottom-6 lg:bottom-0 lg:right-28 lg:top-72 animate-[spin_10s_linear_infinite] w-20 lg:w-auto" />
                </div>
            </div>
            <section className="pb-6">
                <MoreDesigns />
            </section>
            <section className="bg-white ">
                <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 py-10 lg:py-20">
                    <div className="grid lg:grid-cols-3 gap-10">
                        <div>
                            <p className="text-[#18171C] text-4xl lg:text-6xl font-bold">Services</p>
                            <p className="text-[#18171C] py-3 lg:py-10 lg:w-3/4">Professional solutions tailored to your business's needs.</p>
                            <div className="flex">
                                <a href="" className="flex px-6 py-3 bg-[#09CF83] rounded-full gap-2">
                                    <p className="text-[#18171C] font-medium">Start a Project</p>
                                    <ForwardIconDark />
                                </a>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="grid lg:grid-cols-2 gap-10">
                                <div className="lg:p-6 lg:hover:bg-[#09CF83] rounded-xl transition delay-75 ease-in-out">
                                    <p className="text-[#18171C] text-base lg:text-[24px] font-bold pb-2 lg:pb-4">Web Development</p>
                                    <p className="text-[#18171C] text-sm lg:text-base">Web development is the art of creating websites. It's like building a house, but on the internet!😎. Web developers use special tools and languages to design and construct web pages, making sure they look great, work smoothly, and provide the information or services you and your business need.</p>
                                </div>
                                <div className="lg:p-6 lg:hover:bg-[#09CF83] rounded-xl transition delay-75 ease-in-out">
                                    <p className="text-[#18171C] text-base lg:text-[24px] font-bold pb-2 lg:pb-4">UI/UX Design</p>
                                    <p className="text-[#18171C] text-sm lg:text-base"> UI/UX design is like the magic that makes websites and apps easy to use and beautiful to look at. It's about creating buttons, menus, and screens that feel intuitive and look appealing. UI (User Interface) focuses on how things appear, while UX (User Experience) is about how easy and enjoyable it is to use the website or app. It's like making sure everything is user-friendly and visually pleasing, just like arranging furniture in a cozy room.</p>
                                </div>
                                <div className="lg:p-6 lg:hover:bg-[#09CF83] rounded-xl transition delay-75 ease-in-out">
                                    <p className="text-[#18171C] text-base lg:text-[24px] font-bold pb-2 lg:pb-4">App Development</p>
                                    <p className="text-[#18171C] text-sm lg:text-base">App development is the creative process of building digital programs that run on your mobile devices, such as smartphones and tablets. App developers use coding languages to craft software that can perform a wide range of tasks, from games and social networking to organizing your to-do lists or helping you shop online. It's about bringing your ideas to life and making them accessible with a tap of your finger.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={BigTextOne} alt="" className="lg:mt-16 hidden lg:block" />
            </section>
            <section className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 py-10 lg:py-20">
                <div>
                    <p className="text-4xl lg:text-6xl font-bold">Recent Work</p>
                    <div className="mt-8 relative">
                        <img src={ThumbDNF} alt="" className="" />
                        <div className="lg:w-[436px] lg:p-6 lg:bg-[#09CF83] rounded-xl lg:absolute lg:left-[5%] lg:bottom-[5%] mt-4">
                            <p className="lg:text-[#18171C] text-sm lg:text-base font-semibold pb-2">2024</p>
                            <p className="lg:text-[#18171C] text-3xl lg:text-[28px] font-semibold leading-none">Daisy Nyongesa Foundation Website.</p>
                            <div className="flex gap-2 lg:gap-4 pt-3">
                                <p className="lg:text-[#18171C] px-4 py-0.5 font-medium border border-[#2d2d2d] lg:border-[#1CBA6D] rounded-full text-xs ">UI/UX Design</p>
                                <p className="lg:text-[#18171C] px-4 py-0.5 font-medium border border-[#2d2d2d] lg:border-[#1CBA6D] rounded-full text-xs ">Web Development</p>
                            </div>
                            <p className="py-6 lg:text-[#18171C] text-sm">Daisy Nyongesa Foundation seeks to address societal needs. This is after identifying the existing gaps ... Read More</p>
                            <div className="flex">
                                <a href="" className="flex items-center px-6 py-3 bg-[#09CF83] lg:bg-[#18171C] rounded-full gap-2">
                                    <p className="font-semibold text-[#18171C] lg:text-white text-sm leading-none">View Project</p>
                                    <div className="hidden lg:block">
                                        <ForwardIcon />
                                    </div>
                                    <div className="lg:hidden">
                                        <ForwardIconDark />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LandingPage2