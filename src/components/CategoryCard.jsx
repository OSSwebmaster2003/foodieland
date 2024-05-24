const CategoryCard = ({ title, image, gradientBackground }) => {
  return (
    <div
      style={{ background: gradientBackground }}
      className="h-[202px] w-[180px] rounded-[30px] py-3 flex flex-col items-center justify-end gap-6 cursor-pointer hover:shadow-xl transition-all duration-500"
    >
      <img src={image} alt={title} className="w-[100px]" />
      <h5>{title}</h5>
    </div>
  );
};

export default CategoryCard;
