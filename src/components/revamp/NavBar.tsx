import { Link } from "react-router-dom"
import Logo from "../../assets/revamp/Logo/Logo-light.svg"
import Logo2 from "../../assets/revamp/Logo/tarech-final-logo.svg"
import { ForwardIcon, ForwardIconDark } from "./Icons"

const NavBar = () => {
    return (
        <div>
            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-10">
                <div className="flex justify-between items-center">
                    <Link to="/" >
                        <img src={Logo2} alt="" className="w-28 lg:w-32 " />
                    </Link>
                    <div className="flex items-center gap-24">
                        <div className="lg:flex gap-6 hidden">
                            <a href="/" className="hover:text-[#09CF83]">
                                Home
                            </a>
                            <a href="#services" className="hover:text-[#09CF83]">
                                Services
                            </a>
                            <a href="#projects" className="hover:text-[#09CF83]">
                                Projects
                            </a>
                            <a href="#process" className="hover:text-[#09CF83] ">
                                Process
                            </a>
                        </div>
                        <Link to="/contact">
                            <div className="flex items-center gap-2 hover:translate-x-2 transform duration-300">
                                <p className="hover:text-[#09CF83]">Let's Talk</p>
                                <ForwardIcon />
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar



export const CaseNavBar = () => {
    return (
        <div>
            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-10">
                <div className="flex justify-between items-center">
                    <Link to="/" >
                        <img src={Logo} alt="" className="w-28 lg:w-32 " />
                    </Link>
                    <div className="flex items-center gap-24">
                        <div className="lg:flex gap-6 hidden">
                            <a href="/" className="hover:text-[#09CF83] text-[#18171C]">
                                Home
                            </a>
                            <a href="#services" className="hover:text-[#09CF83] text-[#18171C]">
                                Services
                            </a>
                            <a href="#projects" className="hover:text-[#09CF83] text-[#18171C]">
                                Projects
                            </a>
                            <a href="#process" className="hover:text-[#09CF83] text-[#18171C]">
                                Process
                            </a>
                        </div>
                        <Link to="/contact">
                            <div className="flex items-center gap-2 hover:-translate-y-2 transform duration-300">
                                <p className="hover:text-[#09CF83] text-[#18171C]">Let's Talk</p>
                                <ForwardIconDark />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}



export const NoLinksNavBar = () => {
    return (
        <div>
            <div>
                <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-10">
                    <div className="flex justify-between items-center">
                        <Link to="/" >
                            <img src={Logo} alt="" className="w-28 lg:w-32 " />
                        </Link>
                        <div className="flex items-center gap-24">
                            <div className="lg:flex gap-6 hidden">
                                <a href="/" className="hover:text-[#09CF83] text-[#18171C]">
                                    Home
                                </a>

                            </div>
                            <Link to="/contact">
                                <div className="flex items-center gap-2 hover:-translate-y-2 transform duration-300">
                                    <p className="hover:text-[#09CF83] text-[#18171C]">Let's Talk</p>
                                    <ForwardIconDark />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
