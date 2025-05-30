import data from "../../data/data.js";
import ItemList from "./components/ItemList";

const ListCards = () => {
  return (
    <div>
      <ul
        className="columns-1 sm:columns-2 gap-x-[20px] w-fit mx-auto my-[100px] px-[15px]"
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
