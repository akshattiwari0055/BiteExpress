import { LOGO_URL } from "../utils/contants";
import { useState } from "react";
const Header = () => {
    let [btnNameReact,setbtnNameReact] = useState("Login")
    return (
        <div className = "header">
            <div className = "logo-container">
                <img className="logo" src = {LOGO_URL}/>
            </div>
            <div className = "nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button className="login" 
                    onClick={()=>{
                        btnNameReact=="Login"?setbtnNameReact("Logout"):setbtnNameReact("Login");
                        }}
                        >
                            {btnNameReact}</button>
                </ul>
            </div>
        </div>
    );
};
export default Header;