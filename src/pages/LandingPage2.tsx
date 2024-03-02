import { ForwardIconDark } from "../components/revamp/Icons"
import NavBar from "../components/revamp/NavBar"
import spin from "../assets/revamp/Logo/spin.svg"
import MoreDesigns from "../components/revamp/MoreDesigns"


const LandingPage2 = () => {
    return (
        <div className="landing-page-two bg-[#18171C]">
            <NavBar />
            <div className=" relative px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
                <div>
                    <h1 className="text-8xl leading-[83px] font-extrabold w-4/5 tracking-wide">Empowering Digital Potential for Growing Businesses.</h1>
                    <p className=" pt-32 w-1/3">Our main focus in Web Development ,App Development & UX/UI Design is to create tailored solutions that align with our clients' business goals and effectively address their user’s needs.</p>
                    <div className="flex">
                        <a href="" className="flex px-6 py-3 bg-[#09CF83] rounded-full gap-2 my-10">
                            <p className="text-[#18171C] font-medium">Start a Project</p>
                            <ForwardIconDark />
                        </a>
                    </div>
                    <img src={spin} alt="" className="absolute right-28 top-72 animate-[spin_10s_linear_infinite]" />
                </div>
            </div>
            <section className="pb-6">
                <MoreDesigns />
            </section>
        </div>
    )
}

export default LandingPage2