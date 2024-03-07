import { Link } from "react-router-dom"
import { ArrowBack } from "../../components/revamp/Icons"
import { NoLinksNavBar } from "../../components/revamp/NavBar"
import Hero from "../../assets/revamp/projects/dnf/dnf-hero (1).png"
import HeroMobile from "../../assets/revamp/projects/dnf/dnf-hero-mobile (1).png"
import BodyOne from "../../assets/revamp/projects/dnf/dnf-body-one (1).png"
import Pallet from "../../assets/revamp/projects/dnf/dnf-color-pallet.svg"
import Prototype from "../../assets/revamp/projects/dnf/dng-prototype (1).png"
import WireFrame from "../../assets/revamp/projects/dnf/dnf-wirefrme.svg"
import Footer from "../../components/revamp/Footer"

const DnfCase = () => {
    return (
        <div>
            <div>
                <NoLinksNavBar />
            </div>
            <div className="">
                <div className="grid lg:grid-cols-2 items-center">
                    <div className="lg:ml-28 p-4 lg:p-0 ">
                        <Link to="/" className="flex">
                            <div className="flex items-center gap-2 hover:bg-gray-100 p-1 rounded-full">
                                <span>
                                    <ArrowBack />
                                </span>
                                <span className="underline text-[#18171C]">Back</span>
                            </div>
                        </Link>
                        <div className="mt-16">
                            <p className="text-[#18171C] text-4xl lg:text-[64px] hero2 font-bold leading-none">Daisy Nyongesa Foundation</p>
                            <p className="text-[#18171C] mt-4 mb-8">Daisy Nyongesa Foundation seeks to address societal needs. This is after identifying the existing gaps in the 24
                                constituencies of Western Kenya and analyzing the best approach in mitigating them. We are dedicated to empowering
                                youth and women through Education, Mentorship and Leadership, fostering a future where every voice leads and inspires.</p>
                            <a href="https://daisynyongesafoundation.org/" className="underline text-[#CC9931]">View Live</a>
                            <div className="mt-8">
                                <div>
                                    <p className="py-4"><span className="text-[#707070] pr-4">Services:</span> <span className="text-[#18171C] font-semibold">UI/UX Design, Web Development</span></p>
                                    <div className="bg-gray-100 w-full lg:w-1/2 h-0.5"></div>
                                </div>
                                <div>
                                    <p className="py-4"><span className="text-[#707070] pr-4">Duration: </span> <span className="text-[#18171C] font-semibold">1 Week</span></p>
                                    <div className="bg-gray-100 w-full lg:w-1/2 h-0.5"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={Hero} alt="" className="hidden lg:block" />
                    <img src={HeroMobile} alt="" className="lg:hidden" />
                </div>

            </div>
            <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-32">
                <div className="lg:py-16">
                    <p className="text-2xl lg:text-[40px] text-[#18171C] lg:leading-[50px]">The Daisy Nyongesa Foundation recognized the power of an online presence in reaching a wider audience and engaging stakeholders effectively. To achieve this, the foundation embarked on the development of a website that would serve as a central hub for information, resources, and opportunities.</p>
                </div>
                <img src={BodyOne} alt="" className="my-8 lg:my-16" />
            </section>
            <section className="bg-[#18171C]">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-32">
                    <div className="grid lg:grid-cols-2 items-center">
                        <p className="lg:w-2/3">The <span className="font-bold">website's visual identity</span>  was carefully crafted to reflect the foundation's mission and values. Bright colors, engaging imagery, and intuitive navigation were key elements of the design.</p>
                        <img src={Pallet} alt="" className="py-4 lg:py-0" />
                    </div>
                    <div className="flex flex-col lg:justify-end lg:items-end lg:pt-32">
                        <p className="lg:w-1/3 lg:text-right"><span className="font-bold lg:text-right">Wireframes and prototypes</span>  were created to visualize the website's structure and functionality. This stage allowed for feedback and iteration before moving into full-scale development.</p>
                        <img src={WireFrame} alt="" className="py-4" />
                    </div>
                </div>
            </section>
            <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-32">
                <div>
                    <div className="mb-8">
                        <p className="lg:w-1/3 text-[#18171C] mb-4">Leveraging modern web development technologies, the website was built to be responsive, user-friendly, and scalable.</p>
                        <a href="https://daisynyongesafoundation.org/" className="underline text-[#CC9931]">View Live</a>
                    </div>
                    <img src={Prototype} alt="" />
                </div>
                <div className="py-16">
                    <p className="hero2 text-[#18171C] text-4xl font-bold">Impact</p>
                    <p className="text-2xl lg:text-[40px] text-[#18171C] lg:leading-[50px] mt-4">The launch of the Daisy Nyongesa Foundation website marked a significant milestone in the organization's efforts to connect with its audience and drive positive change. Key outcomes include:</p>
                    <div className="mt-8">
                        <li className="text-[#18171C] text-lg py-1">Increased visibility and awareness of the foundation's initiatives</li>
                        <li className="text-[#18171C] text-lg py-1">Improved engagement with stakeholders, including donors, volunteers, and beneficiaries</li>
                        <li className="text-[#18171C] text-lg py-1">Empowerment of youth and women to actively participate in community development efforts</li>
                    </div>
                </div>
            </section>
            <section className="bg-[#18171C]">
                <Footer />
            </section>
        </div>
    )
}

export default DnfCase