import Marquee from "react-fast-marquee"
import Image1 from "../../assets/revamp/images/1.svg";
import Image2 from "../../assets/revamp/images/2.svg";
import Image3 from "../../assets/revamp/images/3.svg";
import Image4 from "../../assets/revamp/images/4.svg";
import Image5 from "../../assets/revamp/images/5.svg"
import Image6 from "../../assets/revamp/images/6.svg"
import Image7 from "../../assets/revamp/images/7.svg"
import Image8 from "../../assets/revamp/images/8.svg"
import Image9 from "../../assets/revamp/images/9.svg"
import Image10 from "../../assets/revamp/images/10.svg"
import Image11 from "../../assets/revamp/images/11.svg"
import Image12 from "../../assets/revamp/images/12.svg"
import Image13 from "../../assets/revamp/images/13.svg"
import Image14 from "../../assets/revamp/images/14.svg"
import Image15 from "../../assets/revamp/images/15.svg"
import Image16 from "../../assets/revamp/images/16.svg"


const MoreDesigns = () => {
    return (
        <div>
            <Marquee>
                <img src={Image1} alt="" className="mx-2" />
                <img src={Image2} alt="" className="mx-2" />
                <img src={Image3} alt="" className="mx-2" />
                <img src={Image4} alt="" className="mx-2" />
                <img src={Image5} alt="" className="mx-2" />
                <img src={Image6} alt="" className="mx-2" />
                <img src={Image7} alt="" className="mx-2" />
                <img src={Image8} alt="" className="mx-2" />
            </Marquee>
            <Marquee direction="right" className="mt-4">
                <img src={Image9} alt="" className="mx-2" />
                <img src={Image10} alt="" className="mx-2" />
                <img src={Image11} alt="" className="mx-2" />
                <img src={Image12} alt="" className="mx-2" />
                <img src={Image13} alt="" className="mx-2" />
                <img src={Image14} alt="" className="mx-2" />
                <img src={Image15} alt="" className="mx-2" />
                <img src={Image16} alt="" className="mx-2" />
            </Marquee>
        </div>
    )
}

export default MoreDesigns