const SmallFoodCard = ({ image, title, author }) => {
  return (
    <div className="w-auto max-w-[430px] flex items-center justify-between gap-4 cursor-pointer">
      <img
        src={image}
        alt={title}
        className="aspect-[3/2] rounded-[20px] w-[180px]"
      />
      <div className="flex items-start justify-between flex-col gap-3">
        <div className="text-[20px] font-semibold leading-[140%] tracking-[-0.04em] text-black">
          {title}
        </div>
        <div className="text-sm font-medium tracking-[-0.02em] text-secondary-black">
          By {author}
        </div>
      </div>
    </div>
  );
};

export default SmallFoodCard;
