import RestroCard, { withPromotedLabel } from "./RestroCard";
// import restroList from "../utils/restroList";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantMenu from "./RestaurantMenu";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    // this timer interval will print every second and remains printing even after the component is unmounted
    // const timer = setInterval(()=>{
    //     console.log('Namaste react');
    // }, 1000);
    swiggyApi();
    // this return will be called after the component is unmounted hence it will stop the timer
    // return () => { clearInterval(timer);};
  }, []);
  const RestaurantCardPromoted = withPromotedLabel(RestroCard);
  const swiggyApi = async () => {
    console.log("in use effect ");
    const listRestro = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // const listRestro  = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6542&lng=77.2373&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    // console.log(listRestro);
    let result = await listRestro.json();
    // console.log(result);
    // console.log(result.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    result =
      result.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    // console.log(result[4]?.card?.card?.gridElements?.infoWithStyle.restaurants)
    // console.log(result);
    setListOfRestaurants(result);
    setFilteredRestaurants(result);
  };
  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h1>
        Look's like you are offline. Please check your internet connection !!
      </h1>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className=" search m-4 p-4">
          <input
            text="text"
            className="ml-10 border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-1 m-4 bg-orange-100 rounded-lg"
            onClick={() => {
              const newList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(newList);
            }}
          >
            Search
          </button>
        </div>
        <div className=" search m-4 p-4 flex items-center ">
          <button
            className="px-4 py-1 bg-gray-100 rounded-lg"
            onClick={() => {
              // console.log(listOfRetaurants[0].info)
              const filteredData = filteredRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              setFilteredRestaurants(filteredData);
              // console.log(listOfRetaurants);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="restro-container flex flex-wrap justify-center justify-items-start">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.avgRating < 4.2 ? (
              <RestaurantCardPromoted
                key={restaurant.info.id}
                resData={restaurant}
              />
            ) : (
              <RestroCard key={restaurant.info.id} resData={restaurant} />
            )}
          </Link>
          // <RestroCard key = {restaurant.info.id} resData ={restaurant}/>
        ))}
      </div>
    </div>
  );
};

export default Body;
