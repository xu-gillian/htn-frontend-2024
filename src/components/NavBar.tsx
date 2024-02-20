import React, { useState } from "react";
import { useLoginState } from "../context/loginState-context";
import { TEvent } from "../types/Events.types";
import { useNavigate } from "react-router-dom";

// navigation component
type NavBarProps = {
    allEvents: TEvent[],
    setDisplayEvents: any,
}

const NavBar: React.FC<NavBarProps> = (props) => {
    const [navColour, setNavColour] = useState(false);
    const { loginState, setLoginState } = useLoginState();
    const navigate = useNavigate();

    // change nav colour when scrolling
    const changeNavColour = () => {
        if (window.scrollY >= 200) {
            setNavColour(true);
        } else {
            setNavColour(false);
        }
    }
    window.addEventListener('scroll', changeNavColour);

    const loginHandler = () => {
        if (loginState) {
            setLoginState(false);
            console.log('logging');
        } else {
            navigate("/login");
        }

    }

    return (
        <div className={navColour ? 'nav-top active' : 'nav-top'}>
            <button className="login" onClick={loginHandler}>{loginState ? 'Logout' : 'Login'}</button>
        </div>
    );
}

export default NavBar;