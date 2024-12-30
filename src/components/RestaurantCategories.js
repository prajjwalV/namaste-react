import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategories = ({ data }) => {
  const { title, itemCards } = data;
  const [showItems, setShowItems] = useState(false);
  const handleClick = () =>{
    setShowItems(!showItems);
  }
  return (
    <div>
      <div className="mx-auto my-2 py-4 w-6/12 shadow-lg ">
        <div className="flex text-center justify-between cursor-pointer"
        onClick={handleClick}
        >
          <span className="font-semibold mx-2">
            {title} ({itemCards?.length})
          </span>
          <span>🔻</span>
        </div>
        <div>
          {showItems && itemCards && itemCards.map((item) => (
            <ItemList key={item.card.info.id} data={item.card.info} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategories;
