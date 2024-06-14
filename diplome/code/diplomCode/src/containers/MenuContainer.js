import React from "react";
import { useState } from "react";
import styleButton from '../views/css/buttons.module.css'
import Menu from "../views/Menu";
const classNames = require('classnames');

function MenuContainer() {

    function setActive(e) {
        let activeB = document.getElementsByClassName(classNames(styleButton.menuActive))[0]
        activeB.className = classNames(styleButton.menu, {[styleButton.menuActive]: false})
        e.target.className = classNames(styleButton.menu, {[styleButton.menuActive]: true})
    }

    return (
        <Menu clickHandler={setActive}/>
    )
}

export default MenuContainer
