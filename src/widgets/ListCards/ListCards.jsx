import data from "../../data/data.js";
import ItemList from "./components/ItemList/index.js";

const ListCards = () => {
  return (
    <div>
      <ul
        className="mx-auto w-fit columns-1 gap-x-[20px] py-[100px] sm:columns-2 sm:px-[15px]"
        style={{
          pageBreakInside: "avoid",
          breakInside: "avoid",
        }}
      >
        {data.map((cardInfo, index) => {
          return (
            <ItemList
              title={cardInfo.title}
              description={cardInfo.description}
              imgSrc={cardInfo.image}
              index={index}
              key={`list-cards-${index}`}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ListCards;
