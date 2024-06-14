import React from "react";
import Menu from "./Menu";
import './css/navigation.module.css'
import MenuContainer from "../containers/MenuContainer";

function Navigation() {
    return (
        <nav>
            <h1 style={{marginTop: '20px'}}>LOGO</h1>
            <hr />
            <MenuContainer />
        </nav>
    )
}

export default Navigation
