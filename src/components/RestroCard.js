import { CDN_URL } from "../utils/constants";
const RestroCard = (props) => {
    const { cuisines, avgRating, costForTwo, areaName, cloudinaryImageId, name  } = props?.resData?.info;
    const { deliveryTime } = props?.resData?.info?.sla;
    const nameLength = 16;
    const cuisineLength = 26;
    const cuisineStr = cuisines.join(', ')
    let cuisineShort = cuisineStr.length > cuisineLength ? cuisineStr.substring(0, nameLength) + '...' : cuisineStr;
    return (
        <div className="restro-card" style = {{backgroundColor: "#f0f0f0"}}>
            <div className="card-logo-container">
            <img 
            className="card-logo"
            src={CDN_URL+cloudinaryImageId}></img>
                
            </div>
            <div className="card-title">
            <h3 className="name"> {((name.length > 20) ? name.substring(0, nameLength) + '...' : name)}, </h3>
            </div>

            <p className="detail"> {cuisineShort} </p>
            <p className="detail"> {avgRating} stars - {deliveryTime} mins </p>
            {/* <p className="detail"> {costForTwo} </p> */}
            <p className="name"> {areaName} </p>
        </div>
    )
 }

 export default RestroCard;