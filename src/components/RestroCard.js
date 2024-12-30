import { CDN_URL } from "../utils/constants";
const RestroCard = (props) => {
  const { cuisines, avgRating, costForTwo, areaName, cloudinaryImageId, name } =
    props?.resData?.info;
  const { deliveryTime } = props?.resData?.info?.sla;
  const nameLength = 16;
  const cuisineLength = 26;
  const cuisineStr = cuisines.join(", ");
  let cuisineShort =
    cuisineStr.length > cuisineLength
      ? cuisineStr.substring(0, nameLength) + "..."
      : cuisineStr;
  return (
    <div className="m-4 p-4 w-[250px] rounded-2xl shadow-xl hover:bg-orange-100" >
      <div className="card-logo-container">
        <img className="card-logo h-60 w-60 rounded-2xl" src={CDN_URL + cloudinaryImageId}></img>
      </div>
      <div className="card-title">
        <h3 className="name font-bold py-2 text-lg">
          {" "}
          {name.length > 20
            ? name.substring(0, nameLength) + "..."
            : name},{" "}
        </h3>
      </div>

      <p className="detail"> {cuisineShort} </p>
      <p className="detail">
        {" "}
        {avgRating} stars - {deliveryTime} mins{" "}
      </p>
      {/* <p className="detail"> {costForTwo} </p> */}
      <p className="name"> {areaName} </p>
    </div>
  );
};

// higher order components , it takes a function as an input and returns a function , these are pure functions because they
// return the input function unchanged ,
// Here we did not change anything in the original restroCard but added a feature on top of it

export const withPromotedLabel = (RestroCard) => {
  return (props) => {
    return (
      <div>
        <label className="promoted absolute ml-4 m-2 p-1 bg-black font-serif text-white rounded-md">Promoted</label>
        <RestroCard {...props} />
      </div>
    );
  };
};

export default RestroCard;
