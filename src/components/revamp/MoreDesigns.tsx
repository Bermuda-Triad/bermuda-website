import Marquee from "react-fast-marquee"
import Image1 from "../../assets/revamp/images/1.png";
import Image2 from "../../assets/revamp/images/2.png";
import Image3 from "../../assets/revamp/images/3.png";
import Image4 from "../../assets/revamp/images/4.png";
import Image5 from "../../assets/revamp/images/5.png"
import Image6 from "../../assets/revamp/images/6.png"
import Image7 from "../../assets/revamp/images/7.png"
import Image8 from "../../assets/revamp/images/8.png"
import Image9 from "../../assets/revamp/images/9.png"
import Image10 from "../../assets/revamp/images/10.png"
import Image11 from "../../assets/revamp/images/11.png"
import Image12 from "../../assets/revamp/images/12.png"
import Image13 from "../../assets/revamp/images/13.png"
import Image14 from "../../assets/revamp/images/14.png"
import Image15 from "../../assets/revamp/images/15.png"
import Image16 from "../../assets/revamp/images/16.png"


const MoreDesigns = () => {
    return (
        <div>
            <Marquee>
                <img src={Image1} alt="" className="mx-2 w-72 lg:w-[475px]" />
                <img src={Image2} alt="" className="mx-2 w-72 lg:w-[475px]" />
                <img src={Image3} alt="" className="mx-2 w-72 lg:w-[475px]" />
                <img src={Image4} alt="" className="mx-2 w-72 lg:w-[475px]" />
                <img src={Image5} alt="" className="mx-2 w-72 lg:w-[475px]" />
                <img src={Image6} alt="" className="mx-2 w-72 lg:w-[475px]" />
                <img src={Image7} alt="" className="mx-2 w-72 lg:w-[475px]" />
                <img src={Image8} alt="" className="mx-2 w-72 lg:w-[475px]" />
            </Marquee>
            <Marquee direction="right" className="mt-4">
                <img src={Image9} alt="" className="mx-2 w-72 lg:w-[475px]" />
                <img src={Image10} alt="" className="mx-2 w-72 lg:w-[475px]" />
                <img src={Image11} alt="" className="mx-2 w-72 lg:w-[475px]" />
                <img src={Image12} alt="" className="mx-2 w-72 lg:w-[475px]" />
                <img src={Image13} alt="" className="mx-2 w-72 lg:w-[475px]" />
                <img src={Image14} alt="" className="mx-2 w-72 lg:w-[475px]" />
                <img src={Image15} alt="" className="mx-2 w-72 lg:w-[475px]" />
                <img src={Image16} alt="" className="mx-2 w-72 lg:w-[475px]" />
            </Marquee>
        </div>
    )
}

export default MoreDesigns