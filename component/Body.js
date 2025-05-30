import RestrauntCard from "../component/RestrauntCard";
import resList from "../utils/mockdata";
import { useState } from "react";
const Body = () => {
    const [ListOfRestraunt, SetListOfRestraunt] = useState(resList);
    const filterTopRated = () => {
    const filteredList = resList.filter(
      (res) => Number(res.data.avgRating) > 4
    );
    setResData(filteredList);
  };
    return (
        <div className = "body">
            <div className = "Filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredList=ListOfRestraunt.filter(
                        (res)=>res.data.avgRating>4
                    );
                    SetListOfRestraunt(filteredList);
                }}>
                    Top Rated Restaurant</button>
            </div>
            <div className = "res-container">
                {
                    ListOfRestraunt.map((restaurant) => (
                    <RestrauntCard key = {restaurant.data.id} resData={restaurant}/>
                ))}
            </div>
        </div>
    );
};
export default Body;