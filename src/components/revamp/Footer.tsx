import { ForwardIconDark, Instagram, LinkedIn, Twitter } from "./Icons"
import Logo from "../../assets/revamp/Logo/tarech-final-logo.svg"
import Stroke2 from "../../assets/revamp/others/Stroke2.svg"
import { Link } from "react-router-dom"


const Footer = () => {
    return (
        <div>
            <div>
                <div className="py-16">
                    <div className="flex justify-center">
                        <p className="lg:w-1/2 text-center text-4xl lg:text-6xl font-bold hero2">We Can Help You Grow and Innovate.</p>
                    </div>
                    <div className="flex justify-center">
                        <Link to="/contact">
                            <div className="flex px-6 py-3 bg-[#09CF83] rounded-full gap-2 mt-4 lg:my-10 hover:-translate-y-2 transform duration-300">
                                <p className="text-[#18171C] font-semibold">Start a Project</p>
                                <ForwardIconDark />
                            </div>
                        </Link>

                    </div>
                </div>
                <section className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-10">
                    <div>
                        <div className="flex justify-between gap-10">
                            <div className="flex justify-center lg:justify-normal">
                                <Link to="/" >
                                    <img src={Logo} alt="" className="w-28 lg:w-32 " />
                                </Link>
                            </div>
                            <div className="lg:hidden">
                                <div className="flex items-center gap-2 justify-center lg:justify-normal">
                                    <a href="">
                                        <Twitter />
                                    </a>
                                    <a href="">
                                        <LinkedIn />
                                    </a>
                                    <a href="">
                                        <Instagram />
                                    </a>
                                </div>
                            </div>

                            <p className="text-center hidden lg:block">© Copyright 2024 Tarech Studio. All Rights Reserved.</p>
                            <div className="hidden lg:block">
                                <div className="flex items-center gap-2 justify-center lg:justify-normal opacity-10">
                                    <p >
                                        <Twitter />
                                    </p>
                                    <p >
                                        <LinkedIn />
                                    </p>
                                    <p>
                                        <Instagram />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="text-center py-4 lg:hidden text-xs lg:text-base">© Copyright 2024 Tarech Studio. All Rights Reserved.</p>
                    </div>
                </section>
                <img src={Stroke2} alt="" />

            </div>
        </div>
    )
}

export default Footer