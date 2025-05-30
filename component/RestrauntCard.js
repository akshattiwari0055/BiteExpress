import { CDN_URL } from "../utils/contants";
const RestrauntCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,deliveryTime,costForTwo,id} = resData?.data;
    return (
        <div className="res-cards">
                  <img className="res-logo" src={CDN_URL+cloudinaryImageId}></img>
    <h4>{name}</h4>
    <h4>{resData.data.cuisines.join(" ,")}</h4>
    <h4>{avgRating+" ⭐"}</h4>
    <h4>{deliveryTime+" minutes"}</h4>
    <h4>{"Cost for two: "+costForTwo/100 + " Rs"}</h4>
    </div>
    );
};
export default RestrauntCard;