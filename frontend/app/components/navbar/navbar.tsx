import "../navbar/navbar.css";
import { SiSololearn } from "react-icons/si";
import { BsPersonFill } from "react-icons/bs";


export function NavBar(){
    return (
        <>
            <nav id="nav_bar_parent">
                <div id="nav_bar_left_side"> <SiSololearn id="nav_bar_icon" /> </div>
                <div id="nav_bar_right_side">     
                    <p>link_1</p>
                    <p>link_2</p>
                    <p>link_3</p>
                    <div id="profile_button">
                        <p>user_name</p>
                        <BsPersonFill id="dummy_profile_picture"/>
                    </div>
                    

                </div>
            </nav>
        </>
    );
}