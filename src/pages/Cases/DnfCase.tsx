import { Link } from "react-router-dom"
import { ArrowBack } from "../../components/revamp/Icons"
import { CaseNavBar } from "../../components/revamp/NavBar"
import Hero from "../../assets/revamp/projects/dnf/dnf-hero (1).png"

const DnfCase = () => {
    return (
        <div>
            <div>
                <CaseNavBar />
            </div>
            <div className="">
                <div className="grid grid-cols-2 items-center">
                    <div className="lg:ml-28">
                        <Link to="/">
                            <div className="flex items-center gap-2">
                                <span>
                                    <ArrowBack />
                                </span>
                                <span className="underline text-[#18171C]">Back</span>
                            </div>
                        </Link>
                        <div className="mt-16">
                            <p className="text-[#18171C] text-[64px] hero2 font-bold leading-none">Daisy Nyongesa Foundation</p>
                            <p className="text-[#18171C] mt-4 mb-8">Daisy Nyongesa Foundation seeks to address societal needs. This is after identifying the existing gaps in the 24
                                constituencies of Western Kenya and analyzing the best approach in mitigating them. We are dedicated to empowering
                                youth and women through Education, Mentorship and Leadership, fostering a future where every voice leads and inspires.</p>
                            <a href="" className="underline text-[#CC9931]">View Live</a>
                            <div className="mt-8">
                                <div>
                                    <p className="py-4"><span className="text-[#707070] pr-4">Services:</span> <span className="text-[#18171C] font-semibold">UI/UX Design, Web Development</span></p>
                                    <div className="bg-gray-100 w-1/2 h-0.5"></div>
                                </div>
                                <div>
                                    <p className="py-4"><span className="text-[#707070] pr-4">Duration: </span> <span className="text-[#18171C] font-semibold">1 Week</span></p>
                                    <div className="bg-gray-100 w-1/2 h-0.5"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={Hero} alt="" />
                </div>

            </div>
        </div>
    )
}

export default DnfCase