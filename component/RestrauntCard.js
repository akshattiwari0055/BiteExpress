import { CDN_URL } from "../utils/contants";
const RestrauntCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,sla,costForTwo,id} = resData?.info;
    return (
        <div className="res-cards">
                  <img className="res-logo" src={CDN_URL+cloudinaryImageId}></img>
    <h4>{name}</h4>
    <h4>{resData.info.cuisines.join(" ,")}</h4>
    <h4>{avgRating+" ⭐"}</h4>
    <h4>{sla?.slaString}</h4>
    <h4>{"Cost for two: "+costForTwo + " Rs"}</h4>
    </div>
    );
};
export default RestrauntCard;