import { Link } from "react-router-dom"
import { ArrowBack } from "../../components/revamp/Icons"
import Hero from "../../assets/revamp/projects/missing-marks/MissingMarkThumb (1).png"
import HeroMobile from "../../assets/revamp/projects/missing-marks/MissingMobileThumb.png"
import BodyOne from "../../assets/revamp/projects/missing-marks/MissingBody (1).png"
import ItemOne from "../../assets/revamp/projects/missing-marks/Element-one.png"
import ItemTwo from "../../assets/revamp/projects/missing-marks/Element-two.png"
import ItemThree from "../../assets/revamp/projects/missing-marks/Element-three.png"
import Wireframe from "../../assets/revamp/projects/missing-marks/MissingWireframe.png"
import ProtoOne from "../../assets/revamp/projects/missing-marks/Proto-one (1).png"
import ProtoTwo from "../../assets/revamp/projects/missing-marks/proto-two (2).png"
import { NoLinksNavBar } from "../../components/revamp/NavBar"
import Footer from "../../components/revamp/Footer"

const MissingMarks = () => {
    return (
        <div>
            <div className="">
                <NoLinksNavBar />
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
                            <p className="text-[#18171C] text-4xl lg:text-[64px] hero2 font-bold leading-none">Missing Marks
                                System.</p>
                            <p className="text-[#18171C] mt-4 mb-8">The Missing Mark System is a web platform for universities allowing students to report missing exam grades. It notifies lecturers, tracks investigations, and ensures accountability. It promotes academic integrity and streamlines administrative processes.</p>
                            <div className="mt-8">
                                <div>
                                    <p className="py-4"><span className="text-[#707070] pr-4">Services:</span> <span className="text-[#18171C] font-semibold">UI/UX Design, Web Development</span></p>
                                    <div className="bg-gray-100 w-full lg:w-1/2 h-0.5"></div>
                                </div>
                                <div>
                                    <p className="py-4"><span className="text-[#707070] pr-4">Duration: </span> <span className="text-[#18171C] font-semibold">6 Months</span></p>
                                    <div className="bg-gray-100 w-full lg:w-1/2 h-0.5"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={Hero} alt="" className="hidden lg:block" />
                    <img src={HeroMobile} alt="" className="lg:hidden" />
                </div>
                <section className="px-4 lg:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
                    <div className="lg:py-16">
                        <p className=" lg:text-[40px] text-[#18171C] lg:leading-[50px]">
                            Universities often face logistical hurdles when managing academic records, particularly during peak assessment periods. Lost exam booklets, data entry errors, and oversight by lecturers can result in missing marks, causing undue stress and inconvenience to students. Traditional methods of rectification relied heavily on manual processes, leading to delays and frustration for both students and faculty.
                        </p>
                    </div>
                    <img src={BodyOne} alt="" className="my-8" />
                </section>
                <section className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
                    <div className="flex flex-col lg:justify-end lg:items-end pb-16">
                        <p className="lg:w-1/3 lg:text-right  text-[#18171C]">The <span className="font-bold lg:text-right text-[#18171C] text-lg">visual identity</span> was carefully crafted to reflect the foundation's mission and values. Bright colors, engaging imagery, and intuitive navigation were key elements of the design</p>
                        {/* <img src={WireFrame} alt="" className="py-4" /> */}
                    </div>
                    <div className="grid lg:grid-cols-2 gap-2 lg:gap-10">
                        <img src={ItemOne} alt="" />
                        <img src={ItemTwo} alt="" />
                        <img src={ItemThree} alt="" />
                    </div>

                    <div className="py-16 lg:py-32">
                        <p className="hero2 text-[#18171C] text-4xl font-bold">Solution</p>
                        <p className="text-base lg:text-[40px] text-[#18171C] lg:leading-[50px] mt-4">
                            The Missing Mark System was conceptualized and developed to streamline the process of investigating and resolving missing marks. It provides a user-friendly interface accessible to students, lecturers, and department administrators, facilitating transparent communication and efficient resolution of missing mark incidents.
                        </p>
                        <p className="font-bold text-2xl lg:text-[40px] text-[#18171C] lg:leading-[50px] mt-8">
                            Key Features
                        </p>
                        <div className="lg:mt-2 grid lg:grid-cols-2 gap-4 lg:gap-5">
                            <li className="text-[#18171C]  lg:text-lg py-1">
                                <span className="text-[#18171C] font-bold">
                                    Student Portal: {" "}
                                </span>
                                The system allows students to submit applications detailing the missing mark, along with relevant information such as course code, exam date, and any supporting documentation.
                            </li>

                            <li className="text-[#18171C] lg:text-lg py-1">
                                <span className="text-[#18171C] font-bold">
                                    Automated Notifications: {" "}
                                </span>
                                Upon submission, the system automatically notifies the respective lecturer responsible for grading the exam. Lecturers receive a text message alerting them to the missing mark and prompting them to investigate.
                            </li>

                            <li className="text-[#18171C] lg:text-lg py-1">
                                <span className="text-[#18171C] font-bold">
                                    Resolution Feedback: {" "}
                                </span>
                                After investigating, lecturers can update the system with the status of the missing mark, indicating whether it has been found or remains unresolved. They are required to provide a reason for the missing mark, ensuring transparency and accountability.
                            </li>
                            <li className="text-[#18171C] lg:text-lg py-1">
                                <span className="text-[#18171C] font-bold">
                                    Departmental Administration: {" "}
                                </span>
                                Department heads serve as administrators, overseeing the system within their respective departments. They have the authority to add or remove lecturers and monitor system activity to ensure adherence to academic standards.
                            </li>
                            <li className="text-[#18171C] lg:text-lg py-1">
                                <span className="text-[#18171C] font-bold">
                                    Lecturer Dashboard: {" "}
                                </span>
                                Lecturers have access to a dedicated dashboard where they can view pending missing mark applications, mark statuses, and provide feedback.
                            </li>
                        </div>
                    </div>
                </section>
                <section className="bg-[#F7F7F7]">
                    <div className="grid lg:grid-cols-2 py-8 lg:py-32">
                        <div className="lg:ml-28 p-4 lg:p-0 place-self-center">
                            <p className="text-[#18171C] lg:text-lg py-1 lg:w-2/3 ">
                                <span className="text-[#18171C] font-bold">
                                    Wireframes and prototypes {"  "}
                                </span>
                                were created to visualize the website's structure and functionality. This stage allowed for feedback and iteration before moving into full-scale development.
                            </p>
                        </div>
                        <img src={Wireframe} alt="" className="pl-4 lg:pl-0" />
                    </div>


                </section>
                <div className="flex flex-col gap-2 lg:gap-10 px-4 lg:px-20 py-8 lg:py-32">
                    <img src={ProtoOne} alt="" />
                    <img src={ProtoTwo} alt="" />
                </div>
                <section className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 py-8 lg:py-16">
                    <div className="">
                        <p className="hero2 text-[#18171C] text-4xl font-bold">Conclusion</p>
                        <p className="text-base lg:text-[40px] text-[#18171C] lg:leading-[50px] mt-4">
                            The Missing Mark System represents a significant step forward in enhancing academic integrity and administrative efficiency within Kenyan universities. By leveraging technology to address the challenges associated with missing marks, it has demonstrated its effectiveness in streamlining processes, improving communication, and ultimately, enhancing the academic experience for students and faculty alike. As universities continue to embrace digital solutions, the Missing Mark System serves as a model for proactive problem-solving and innovation in higher education administration.
                        </p>
                    </div>
                </section>
            </div>
            <section className="bg-[#18171C]">
                <Footer />
            </section>
        </div>
    )
}

export default MissingMarks