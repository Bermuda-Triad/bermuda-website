import { useState } from "react";
import Dribbble from "../assets/images/Logos/dribbbble.png";

interface MoreImagesProps {
  images: string;
  links: string;
}

function MoreDesigns(props: MoreImagesProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative mx-3"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={props.images}
        alt=""
        className="object-cover object-center w-full h-full"
      />
      {isHovered && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70">
          {/* Your icon goes here */}
          <a href="">
            <div className="text-[#E84C88] text-6xl">
              <img src={Dribbble} alt="" className="w-14" />
            </div>
          </a>
        </div>
      )}
    </div>
  );
}

export default MoreDesigns;
