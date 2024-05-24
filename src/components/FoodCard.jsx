import ReactFlipCard from "reactjs-flip-card";
import FlexStart from "../ui/FlexStart";
import foodCardBackBg from "../assets/food-card-back.png";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { PiForkKnifeFill } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";

const FoodCardFront = ({
  gradientBackground,
  image,
  title,
  time,
  category,
}) => {
  return (
    <div
      className="w-fullinset-0 front-card p-3 pb-4 transform transition duration-500 rotate-y-0 rounded-[30px] absolute h-[400px] min-w-[300px]"
      style={{ background: gradientBackground }}
    >
      <img
        src={image}
        alt="image"
        className="w-full rounded-[30px] aspect-[3/2]"
      />
      <h4 className="mt-3">{title}</h4>
      <div className="mt-3 mb-3">
        <FlexStart>
          <div>
            <FlexStart direction="row">
              <MdOutlineAccessTimeFilled className="w-6 h-6" />
              <div className="text-sm font-medium tracking-[-0.02em] text-secondary-black">
                {time} minutes
              </div>
            </FlexStart>
          </div>
          <div className="ml-10">
            <FlexStart>
              <PiForkKnifeFill className="w-6 h-6" />
              <div className="text-sm font-medium tracking-[-0.02em] text-secondary-black">
                {category}
              </div>
            </FlexStart>
          </div>
        </FlexStart>
      </div>
    </div>
  );
};

const FoodCardBack = ({ image, title }) => {
  return (
    <div className="relative h-[400px] min-w-[300px] flex items-center justify-center bg-no-repeat bg-cover bg-center rounded-[30px]">
      <div className="save_liked absolute z-10 w-12 h-12 rounded-full bg-white right-2 top-2">
        <div className="flex items-center justify-center w-full h-full cursor-pointer">
          <FaRegHeart className="w-[22px]" />
        </div>
      </div>
      <div className="absolute w-full max-w-[200px] text-center text-lg text-white font-lobster top-12">
        Don’t forget to eat healthy food
      </div>
      <div className="absolute w-full font-medium text-center text-sm tracking-[-0.02em] text-secondary-white font-inter bottom-4">
        www.foodieland.com
      </div>
      <img
        src={foodCardBackBg}
        alt=""
        className="w-full h-full rounded-[30px]"
      />
      <img
        src={image}
        alt={title}
        className="absolute w-full aspect-square rounded-full max-w-28"
      />
    </div>
  );
};

const FoodCard = ({ gradientBackground, image, title, time, category }) => {
  return (
    <ReactFlipCard
      frontComponent={
        <FoodCardFront
          gradientBackground={gradientBackground}
          image={image}
          title={title}
          time={time}
          category={category}
        />
      }
      backComponent={<FoodCardBack image={image} title={title} />}
    />
  );
};

export default FoodCard;
