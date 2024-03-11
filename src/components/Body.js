import RestroCard from "./RestroCard";
import restroList from "../utils/restroList";
import { useState } from "react";


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(restroList);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    // console.log(listOfRetaurants[0].info)
                    const filteredData = listOfRestaurants.filter( res => res.info.avgRating > 4.3)
                    setListOfRestaurants(filteredData);
                    // console.log(listOfRetaurants);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="restro-container">
                { listOfRestaurants.map( restaurant => ( <RestroCard key = {restaurant.info.id} resData ={restaurant}/>))}
                
            </div>
        </div>
    )
}

export default Body;