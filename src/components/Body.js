import RestroCard from "./RestroCard";
// import restroList from "../utils/restroList";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        // this timer interval will print every second and remains printing even after the component is unmounted
        const timer = setInterval(()=>{
            console.log('Namaste react');
        }, 1000);
        swiggyApi();
        // this return will be called after the component is unmounted hence it will stop the timer 
        return () => { clearInterval(timer);};
    }
    ,[])
    const swiggyApi = async ()=> {
        console.log('in use effect ');
        const listRestro  = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6542&lng=77.2373&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        console.log(listRestro);
        let result = await listRestro.json();
        console.log(result.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        result = result.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        // console.log(result[4]?.card?.card?.gridElements?.infoWithStyle.restaurants)
        setListOfRestaurants(result);
        setFilteredRestaurants(result);
    }

    return listOfRestaurants.length === 0 ?  <Shimmer/> :(
        <div className="body">
            <div className="filter-serach-container"><div className="search-container">
                <input className="search-input" value = {searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}></input>
                <button className="search-btn" onClick={()=>{
                    const newList = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()) )
                    setFilteredRestaurants(newList);
                }}>Search</button>
            </div>
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    // console.log(listOfRetaurants[0].info)
                    const filteredData = filteredRestaurants.filter( res => res.info.avgRating > 4.3)
                    setFilteredRestaurants(filteredData);
                    // console.log(listOfRetaurants);
                }}>Top Rated Restaurants</button>
            </div>
            </div>
            <div className="restro-container">
                { filteredRestaurants.map( restaurant => ( <RestroCard key = {restaurant.info.id} resData ={restaurant}/>))}
                
            </div>
        </div>
    )
}

export default Body;