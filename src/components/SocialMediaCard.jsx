import officialIcon from "../assets/official_icon.svg";
import craigLove from "../assets/craig_love.png";
import { BsThreeDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { BsBookmark } from "react-icons/bs";

const SocialMediaCard = ({ image, description, date }) => {
  return (
    <div className="bg-white hover:shadow-lg transition-all duration-500">
      <div className="card-header p-3 flex items-center justify-between">
        <div className="flex items-center justify-start gap-2">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.1066 25.2534C19.9402 25.2534 25.4799 19.7137 25.4799 12.88C25.4799 6.04644 19.9402 0.506714 13.1066 0.506714C6.27301 0.506714 0.733276 6.04644 0.733276 12.88C0.733276 19.7137 6.27301 25.2534 13.1066 25.2534Z"
              fill="url(#pattern0)"
            />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlinkHref="#image0_101_549" transform="scale(0.005)" />
              </pattern>
              <image
                id="image0_101_549"
                width="200"
                height="200"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>
          <div className="flex flex-col items-start justify-start gap-1">
            <div className="flex items-center justify-center gap-1 text-[10px] font-semibold leading-[138%] tracking-[-0.01em] text-[#262626]">
              Foodieland.{" "}
              <span>
                <img src={officialIcon} alt="official-logo" className="w-2" />
              </span>
            </div>
            <div className="text-[8px] tracking-[0.01em] text-[#262626]">
              Tokyo, Japan
            </div>
          </div>
        </div>
        <BsThreeDots className="cursor-pointer" />
      </div>
      <div className="card-image w-full aspect-square relative">
        <div className="absolute w-[27px] h-[20px] rounded-[10px] bg-[rgba(18,18,18,0.7)] top-3 right-3 flex items-center justify-center text-[9px] text-[#f9f9f9] font-inter">
          1/3
        </div>
        <img src={image} alt="social-media-img" className="w-full h-full" />
      </div>
      <div className="card-actions flex items-center justify-center p-3 relative">
        <div className="absolute flex gap-3 items-center justify-start left-3">
          <FaRegHeart className="w-5" />
          <FaRegComment className="w-5" />
          <LuSend className="w-5" />
        </div>
        <div className="flex items-center justify-center gap-1">
          <div className="w-[5px] h-[5px] rounded-full bg-[#3897f0]"></div>
          <div className="w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.15)]"></div>
          <div className="w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.15)]"></div>
        </div>
        <BsBookmark className="absolute font-bold right-3" />
      </div>
      <div className="card-likes flex items-center justify-start gap-1 text-[10px] leading-[138%] tracking-[-0.01em] text-[#262626] px-3 py-5 pt-2">
        <img src={craigLove} alt="liked-by" />
        Liked by
        <span className="font-semibold">craig_love</span>
        and
        <span className="font-semibold">44,686</span>
        others
      </div>
      <div className="text-[10px] leading-[138%] tracking-[-0.01em] text-[#262626] px-3 pb-3">
        <span className="font-semibold">Foodieland. </span>
        {description}
      </div>
      <div className="pb-3 px-3 text-[8px] text-black/60 font-inter">
        {date}
      </div>
    </div>
  );
};

export default SocialMediaCard;
