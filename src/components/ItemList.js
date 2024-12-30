import { CDN_URL, FOOD_IMG_URL } from "../utils/constants";

const ItemList = ({ data }) => {
  const { name, description, price, defaultPrice, imageId } = data;
  return (
    <div className="m-2 p-2 border-gray-200 border-b-2 text-left flex justify-between">

      <div className="w-9/12">
      <div className="py-2">
        <span className="font-semibold">{name}</span>
        <span> - ₹ {(defaultPrice || price) / 100}</span>
      </div>
      <p className="text-xs ">{description}</p>
    </div>
    <div className="w-3/12 p-4 relative">
  <div className="relative flex justify-center items-center">
    <img 
      src={FOOD_IMG_URL + imageId} 
      className="w-20 h-auto" 
      alt="Food Item" 
    />
    <button 
      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 px-2 py-1 bg-orange-200 text-white shadow-lg rounded-lg"
    >
      Add+
    </button>
  </div>
</div>

    </div>
  );
};

export default ItemList;
