import React from "react";
import Navigation from "./Navigation";
import Content from "./Content";
import style from './css/main.module.css'
import { useNavigate } from "react-router-dom";

function Main({children}) {
    return (
        <div className={style.main}>
            <Navigation />
            <Content>
                {children}
            </Content>
        </div>
    )
}

export default Main
