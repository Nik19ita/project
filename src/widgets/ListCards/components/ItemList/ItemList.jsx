import Link from "next/link";

const ItemList = ({
  title,
  description,
  link = "100 courses",
  imgSrc,
  index,
}) => {
  return (
    <li className="relative mb-[20px] overflow-hidden bg-white px-[24px] py-[18px] sm:max-w-[310px] sm:rounded-[10px]">
      <div className="relative h-full min-h-[130px] w-[80%] sm:min-h-[164px] sm:w-full">
        <h2 className="mb-[4px] text-[20px] font-medium wrap-break-word">
          {title}
        </h2>
        <p className="pb-[30px] text-[15px] font-normal">{description}</p>
        <Link
          href="#"
          className="absolute bottom-0 rounded-[34px] bg-[#0B5DD7] px-[14px]"
        >
          <span className="text-[15px] font-medium text-white">{link}</span>
        </Link>
      </div>

      <img
        className={`absolute right-0 bottom-0 h-[118px] w-[118px] ${
          index === 0 &&
          "sm:relative sm:bottom-[-18px] sm:left-[50%] sm:mt-[-10px] sm:h-[230px] sm:w-[230px] sm:translate-x-[-50%]"
        }`}
        src={imgSrc}
        alt={`картинка ${index}`}
      />
    </li>
  );
};

export default ItemList;
