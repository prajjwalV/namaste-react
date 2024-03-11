import { CDN_URL } from "../utils/constants";
const RestroCard = (props) => {
    const { cuisines, avgRating, costForTwo, areaName, cloudinaryImageId, name  } = props?.resData?.info;
    const { deliveryTime } = props?.resData?.info?.sla;
    return (
        <div className="restro-card" style = {{backgroundColor: "#f0f0f0"}}>
            <div className="card-logo-container">
            <img 
            className="card-logo"
            src={CDN_URL+cloudinaryImageId}></img>
                
            </div>
            <div className="card-title">
            <h3 className="name"> {name}, </h3>
            <p className="name"> {areaName} </p>
            </div>

            <p className="detail"> {cuisines.join(', ')} </p>
            <p className="detail"> {avgRating} stars </p>
            <p className="detail"> {costForTwo} </p>
            <p className="detail"> {deliveryTime} mins </p>
        </div>
    )
 }

 export default RestroCard;