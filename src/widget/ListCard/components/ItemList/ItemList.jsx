import Link from "next/link";

const ItemList = ({
  title,
  description,
  link = "100 courses",
  imgSrc,
  index,
}) => {
  return (
    <div
      className="px-[24px] py-[18px] relative mb-[50px] sm:w-[310px]"
      style={{
        pageBreakInside: "avoid",
        breakInside: "avoid",
      }}
    >
      <div className="min-h-[200px] relative">
        <h2 className="text-[20px] font-medium mb-[4px]">{title}</h2>
        <p className="text-[15px] font-normal">{description}</p>
        <Link
          href="#"
          className="bg-blue-600 py-[10px] px-[20px] rounded-[20px] absolute bottom-0"
        >
          <span className="text-[20px] text-white font-medium">{link}</span>
        </Link>
      </div>

      <div
        className={`absolute w-[118px] h-[118px] bottom-0 right-0
         ${
           index === 0 &&
           "sm:relative sm:w-[230px] sm:h-[230px] sm:left-[50%] sm:translate-x-[-50%] sm:mt-[50px]"
         }`}
      >
        <img
          className={`w-full h-full`}
          src={imgSrc}
          alt={`картинка ${index}`}
        />
      </div>
    </div>
  );
};

export default ItemList;
