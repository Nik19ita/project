import Link from "next/link";

const ItemList = ({
  title,
  description,
  link = "100 courses",
  imgSrc,
  index,
}) => {
  return (
    <article
      className="px-[24px] py-[18px] relative mb-[20px] sm:w-[310px] rounded-[10px] bg-white overflow-hidden "
      style={{
        pageBreakInside: "avoid",
        breakInside: "avoid",
      }}
    >
      <div className="relative h-full min-h-[164px]">
        <h2 className="text-[20px] font-medium mb-[4px]">{title}</h2>
        <p className="text-[15px] font-normal">{description}</p>
        <Link
          href="#"
          className="bg-[#0B5DD7] px-[14px] rounded-[34px] absolute bottom-0"
        >
          <span className="text-[15px] text-white font-medium">{link}</span>
        </Link>
      </div>

      <div
        className={`absolute w-[118px] h-[118px] bottom-0 right-0
         ${
           index === 0 &&
           "sm:relative bottom-[-18px] sm:w-[230px] sm:h-[230px] sm:left-[50%] sm:translate-x-[-50%] mt-[-10px]"
         }`}
      >
        <img
          className={`w-full h-full`}
          src={imgSrc}
          alt={`картинка ${index}`}
        />
      </div>
    </article>
  );
};

export default ItemList;
