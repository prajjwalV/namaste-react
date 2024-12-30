import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.87560&lng=80.91150&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;
        const fetchResData = await fetch(url);
        const result = await fetchResData.json();

        const { name, avgRatingString, totalRatingsString, areaName, city } =
          result.data.cards[2].card.card.info;

        const restaurantData = {
          cards: result.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards,
          name,
          avgRatingString,
          totalRatingsString,
          areaName,
          city,
        };

        setResData(restaurantData);
      } catch (error) {
        console.error("Error fetching restaurant menu:", error);
        setResData(null);
      }
    };

    fetchMenu();
  }, []); // Dependency array to refetch if resId changes

  return resData;
};

export default useRestaurantMenu;
