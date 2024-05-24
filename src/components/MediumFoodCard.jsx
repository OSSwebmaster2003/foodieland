const MediumFoodCard = ({
  image,
  title,
  description,
  author,
  createdAt,
  authorProfile,
}) => {
  return (
    <div className="px-2 py-3 flex items-center justify-start gap-4 w-auto max-w-[840px]">
      <img
        src={image}
        alt={title}
        className="w-[290px] aspect-[3/2] rounded-2xl"
      />
      <div className="flex items-start justify-between flex-col gap-2">
        <h4>{title}</h4>
        <h6>{description}</h6>
        <div className="flex items-center justify-start gap-5">
          <div className="flex items-center justify-start gap-2 pr-4 border-r border-r-secondary-black/40">
            <img
              src={authorProfile}
              alt={author}
              className="w-10 aspect-square"
            />
            <h6 className="font-bold text-black">{author}</h6>
          </div>
          <div className="pl-4">
            <h6 className="font-medium">{createdAt}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediumFoodCard;
