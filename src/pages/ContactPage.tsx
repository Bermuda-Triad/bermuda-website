import Logo from "../assets/revamp/Logo/tarech-final-logo.svg"
import Stroke2 from "../assets/revamp/others/Stroke2.svg"
import { Twitter, LinkedIn, Instagram } from "../components/revamp/Icons"
import Illustration from "../assets/revamp/illustrations/ContactIllustration.svg"
import { sendMail } from "../SendEmail"

const ContactPage = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        // closeModal();
    };

    return (
        <div className="bg-[#18171C]">
            {/* <NavBar /> */}
            <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid lg:grid-cols-2">
                    <div>
                        <p className="text-6xl hero2">Let's Talk</p>
                        <img src={Illustration} alt="" className="pr-20 mt-16 w-full" />
                    </div>
                    <div>
                        <form className="md:col-span-2 text-white" id="contact_form" onSubmit={handleSubmit}>
                            {/* <div className="px-4 py-6 sm:p-8"> */}
                            <div className="flex flex-col gap-5">
                                <div className="sm:col-span-8">
                                    <label className="block text-lg leading-6 text-white">Your full name? *</label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            required
                                            id="userName"
                                            name="userName"
                                            placeholder="John Doe"
                                            className="bg-[#18171C] block w-full rounded-md border-0 py-3.5 px-2  text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#09CF83] sm:text-sm sm:leading-6" />
                                    </div>
                                    <div id="nameError" className="error-message text-red-500"></div>
                                </div>

                                <div className="sm:col-span-8">
                                    <label className="block mb-2 text-lg leading-6 text-white">Your email? *</label>
                                    <input
                                        type="email"
                                        required
                                        name="email"
                                        id="email"
                                        placeholder="email@email.com"
                                        className=" bg-[#18171C] block w-full rounded-md border-0 py-3.5 px-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#09CF83] sm:text-sm sm:leading-6" />
                                    <span id="emailError" className="text-red-500"></span>
                                    <div id="emailError" className="error-message text-red-500"></div>
                                </div>

                                <div className="sm:col-span-8">
                                    <label className="block text-lg leading-6 text-white mb-6">What service are you interested in*</label>
                                    <div className="flex items-center gap-6 mb-3">
                                        <input
                                            type="checkbox"
                                            id="checkbox1"
                                            name="checkboxGroup"
                                            value="Web Development"
                                            className="h-5 w-5 text-[#09CF83] focus:outline-none focus:ring-2 ring-[#09CF83]" />
                                        <label className="text-base lg:text-xl font-light">Web Development</label>
                                    </div>
                                    <div className="flex items-center gap-6 mb-3">
                                        <input
                                            type="checkbox"
                                            id="checkbox2"
                                            name="checkboxGroup"
                                            value="Mobile Development"
                                            className="h-5 w-5 text-[#09CF83] focus:outline-none focus:ring-2 ring-[#09CF83]" />
                                        <label className="text-base lg:text-xl font-light">Mobile Development</label>
                                    </div>
                                    <div className="flex items-center gap-6 mb-3">
                                        <input
                                            type="checkbox"
                                            id="checkbox3"
                                            name="checkboxGroup"
                                            value="UI/UX Design"
                                            className="h-5 w-5 text-[#09CF83] focus:outline-none focus:ring-2 ring-[#09CF83]" />
                                        <label className="text-base lg:text-xl font-light">UI/UX Design</label>
                                    </div>
                                    <div id="checkboxGroupError" className="error-message text-red-500"></div>
                                </div>
                                <div className="col-span-8">
                                    <label className="block text-xl leading-6">Message*</label>
                                    {/* <span className="italic  text-gray-500"></span> */}
                                    <div className="mt-4">
                                        <textarea
                                            id="message"
                                            required
                                            placeholder="Type something here..."
                                            name="message"
                                            rows={5}
                                            className="bg-[#18171C] block w-full rounded-md border-0 py-1.5 px-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#09CF83] sm:text-sm sm:leading-6"></textarea>
                                    </div>
                                    <div id="messageError" className="error-message text-red-500"></div>
                                </div>

                                <div className="l:px-8 col-span-8">
                                    <button type="submit" onClick={sendMail}
                                        className="relative text-white inline-flex items-center justify-center w-full h-16 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md  bg-[#09CF83] hover:bg-[#307457]">
                                        <span id="buttonText"> Talk to Us</span>
                                        {/* <div id="loader" className="absolute inset-0 items-center justify-center hidden">
                                            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"></div>
                                        </div> */}
                                    </button>
                                </div>

                            </div>
                            {/* <div /> */}
                        </form>
                    </div>
                </div>
            </div>
            <section>
                <section className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                    <div>
                        <div className="flex justify-between gap-10">
                            <div className="flex justify-center lg:justify-normal">
                                <img src={Logo} alt="" className="w-32" />
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
                        </div>
                        <p className="text-center py-4 lg:hidden text-xs lg:text-base">© Copyright 2024 Tarech Studio. All Rights Reserved.</p>
                    </div>
                </section>
                <img src={Stroke2} alt="" />
            </section>
        </div>
    )
}

export default ContactPage