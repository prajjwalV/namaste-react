import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resData = useRestaurantMenu(resId);
    if (resData === null) return (<Shimmer/>);
    const { cards, name, avgRatingString, totalRatingsString, areaName, city } = resData;
    const categories  = cards.filter(items => items.card.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory' || items.card.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory');
    return (
        <div className="text-center">
            <div className="font-bold m-4 p-2 text-4xl">{name}</div>
            <div className="font-semibold text-lg">{areaName}, {city}</div>
            <div className="font-semibold text-lg mb-4">{avgRatingString}⭐ - {totalRatingsString}</div>
            <div>
                {categories.map(category=>
                    <RestaurantCategories key={category.card.card.title} data={category.card.card} />)}
            </div>
        </div>
    )
}

export default RestaurantMenu;  