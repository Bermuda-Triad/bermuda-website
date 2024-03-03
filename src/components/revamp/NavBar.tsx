import Logo from "../../assets/revamp/Logo/tarech-final-logo.svg"
import { ForwardIcon } from "./Icons"

const NavBar = () => {
    return (
        <div>
            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-10">
                <div className="flex justify-between items-center">
                    <img src={Logo} alt="" className="w-28 lg:w-32 " />
                    <div className="flex items-center gap-24">
                        <div className="lg:flex gap-6 hidden">
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
                        <a href="" className="flex items-center gap-2">
                            <p className="hover:text-[#09CF83]">Let's Talk</p>
                            <ForwardIcon />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar