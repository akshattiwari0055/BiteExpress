import RestrauntCard from "../component/RestrauntCard";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer";
const Body = () => {
    const [ListOfRestraunt, SetListOfRestraunt] = useState([]);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData= async () => {
        const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9380642&lng=80.9412729&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        );
        const json = await data.json();
        console.log(
            json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
        );
        SetListOfRestraunt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    const filterTopRated = () => {
    const filteredList = resList.filter(
      (res) => Number(res.data.avgRating) > 4
    );
    setResData(filteredList);
  };
    return ListOfRestraunt.length==0?<Shimmer/>: (
        <div className = "body">
            <div className = "Filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredList=ListOfRestraunt.filter(
                        (res)=>res.info.avgRating>4
                    );
                    SetListOfRestraunt(filteredList);
                }}>
                    Top Rated Restaurant</button>
            </div>
            <div className = "res-container">
                {
                    ListOfRestraunt.map((restaurant) => (
                    <RestrauntCard key = {restaurant.info.id} resData={restaurant}/>
                ))}
            </div>
        </div>
    );
};
export default Body;